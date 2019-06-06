import React, { Component } from 'react'
import { canUseEventListeners } from 'exenv'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'
import debounce from 'lodash.debounce'

import prefix from '_utils'
import { ItemStatus } from '_utils/item'
import TextField from 'textField'
import AutoCompleteList from './autoCompleteList'
import style from './style'

type query = string | number | boolean
interface AutoCompleteProps {
  readonly name: string
  readonly searchOnMount: boolean
  readonly isSearching: boolean
  readonly searchForItems: (query: query) => void
  readonly onInputChange?: (params: Partial<OnChangeParameters>) => void
  readonly searchForItemsMinChars?: number
  readonly defaultValue?: string
  readonly onSelect?: (obj: AutocompleteOnChange) => void
  readonly onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  readonly onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  readonly onClear?: () => void
  readonly className?: Classcat.Class
  readonly inputClassName?: Classcat.Class
  readonly itemClassName?: Classcat.Class
  readonly bodyClassName?: Classcat.Class
  readonly items?: AutocompleteItem[]
  readonly maxItems?: number
  readonly renderBusy?: ({ query }: { query: query }) => React.ReactElement<any>
  readonly renderNoResults?: ({ query }: { query: query }) => React.ReactElement<any>
  readonly renderQuery?: (item: AutocompleteItem) => string
  readonly renderEmptySearch?: AutocompleteItem[]
  readonly getItemValue?: (item: AutocompleteItem) => string
  readonly inputAddon?: React.ReactElement<any>
  readonly placeholder?: string
  readonly busyTimeout?: number
  readonly debounceTimeout?: number
  readonly autoFocus?: boolean
  readonly focus?: boolean
  readonly buttonTitle?: string
  readonly showList?: boolean
  readonly onDoneAnimationEnd?: () => void
  readonly autoCorrect?: 'on' | 'off'
  readonly disabled?: boolean
  readonly readOnly?: boolean
  readonly required?: boolean
  readonly error?: string | JSX.Element
  readonly selectedItemStatus?: ItemStatus
}

interface AutoCompleteState {
  readonly busy: boolean
  readonly items: AutocompleteItem[]
  readonly formattedValue: string
  readonly textfieldValue: string
  readonly lastDefaultValue: string
  readonly query: query
  readonly noResults: boolean
  readonly isSearching: boolean
}

const initialState: AutoCompleteState = {
  busy: false,
  items: [],
  formattedValue: '',
  textfieldValue: '',
  lastDefaultValue: '',
  query: '',
  noResults: false,
  isSearching: false,
}

export default class AutoComplete extends Component<AutoCompleteProps, AutoCompleteState> {
  private input: HTMLInputElement
  private busyTimeout: number | void

  static defaultProps: Partial<AutoCompleteProps> = {
    searchOnMount: true,
    isSearching: false,
    searchForItemsMinChars: 3,
    maxItems: Infinity,
    renderBusy: () => <div>Loading…</div>,
    renderNoResults: () => <div>No results</div>,
    renderEmptySearch: [],
    onInputChange() {},
    onSelect() {},
    onClear() {},
    renderQuery: item => [item.label, item.labelInfo].filter(Boolean).join(','),
    getItemValue: item => item.label,
    busyTimeout: 150,
    debounceTimeout: 500,
    autoFocus: false,
    focus: false,
    buttonTitle: null,
    defaultValue: '',
    showList: true,
    autoCorrect: 'off',
    disabled: false,
    readOnly: false,
    required: false,
    error: null,
  }

  constructor(props: AutoCompleteProps) {
    super(props)
    if (props.debounceTimeout > 0) {
      this.searchForItems = debounce(this.searchForItems, props.debounceTimeout)
    }
    this.state = {
      ...initialState,
      query: this.props.defaultValue,
      lastDefaultValue: this.props.defaultValue,
      textfieldValue: this.props.defaultValue,
    }
  }

  componentDidMount() {
    if (this.props.searchOnMount) {
      // Triggers the search when the autocomplete is initialised with a default value
      this.searchForItems()
    }

    if (this.input && canUseEventListeners) {
      this.input.addEventListener('keydown', this.onInputKeydown)
    }
  }

  static getDerivedStateFromProps(props: AutoCompleteProps, state: AutoCompleteState) {
    const hasDefaultValueChanged = state.lastDefaultValue !== props.defaultValue
    const baseState = hasDefaultValueChanged
      ? {
          textfieldValue: props.defaultValue,
          lastDefaultValue: props.defaultValue,
          items: [],
        }
      : {}

    if (hasDefaultValueChanged) {
      return {
        ...baseState,
        isSearching: props.isSearching,
      }
    }

    if (state.isSearching && !props.isSearching) {
      return {
        ...baseState,
        isSearching: false,
        busy: false,
        noResults: isEmpty(props.items),
        items: props.items,
      }
    }

    if (state.isSearching !== props.isSearching) {
      return {
        ...baseState,
        isSearching: props.isSearching,
      }
    }

    return null
  }

  componentDidUpdate(nextProps: AutoCompleteProps) {
    const shouldRenderItems = this.props.isSearching && !nextProps.isSearching

    if (shouldRenderItems) {
      this.clearBusyTimeout()
    }
  }

  componentWillUnmount() {
    if (this.input && canUseEventListeners) {
      this.input.removeEventListener('keydown', this.onInputKeydown)
    }
  }

  onInputKeydown = (e: KeyboardEvent) => {
    const KEY_CODE_ENTER = 13
    if (e.keyCode === KEY_CODE_ENTER) {
      e.preventDefault()
    }
  }

  onInputChange = ({ value }: { value: query }) => {
    const textfieldValue = String(value)
    if (this.hasMinCharsForSearch(textfieldValue)) {
      this.setState(
        {
          textfieldValue,
          noResults: false,
          query: value,
        },
        this.searchForItems,
      )
    } else {
      this.clearBusyTimeout()
      this.setState({ textfieldValue: String(value), noResults: false, busy: false, items: [] })
    }
    this.props.onInputChange({ value })
  }

  onSelectItem = (item: AutocompleteItem) => {
    const query = this.props.renderQuery(item)
    this.setState(
      {
        items: [],
        textfieldValue: query,
        query,
        formattedValue: this.props.getItemValue(item),
      },
      () => {
        this.input.select()
        this.props.onSelect({ name: this.props.name, value: this.state.formattedValue, item })
      },
    )
  }

  hasMinCharsForSearch(value: string) {
    return value.length >= this.props.searchForItemsMinChars
  }

  searchForItems = () => {
    // If a long `debounceTimeout` is setup, it may happen that a `searchForItems`
    // is still scheduled to be called while the user has modified the query
    // during that lapse of time. Therefore, the check below verify the real input value
    // against the searchForItemsMinChars prop.
    if (!this.hasMinCharsForSearch(this.state.textfieldValue)) return

    this.busyTimeout = window.setTimeout(this.showBusy, this.props.busyTimeout)
    this.props.searchForItems(this.state.query)
  }

  clearBusyTimeout = () => {
    if (this.busyTimeout) {
      this.busyTimeout = clearTimeout(this.busyTimeout)
    }
  }

  showBusy = () => {
    this.setState({ busy: true })
  }

  inputRef = (input: HTMLInputElement) => {
    this.input = input
  }

  reset() {
    this.setState(initialState)
  }

  render() {
    const hasMinCharsForSearch = this.hasMinCharsForSearch(this.state.textfieldValue)
    const shouldDisplayEmptyState =
      !hasMinCharsForSearch && this.props.showList && !isEmpty(this.props.renderEmptySearch)
    const shouldDisplayBusyState = this.state.busy && this.props.showList
    const shouldDisplayNoResults =
      hasMinCharsForSearch && !this.state.busy && this.state.noResults && this.props.showList
    const shouldDisplayAutoCompleteList =
      hasMinCharsForSearch && !isEmpty(this.state.items) && !this.state.busy && this.props.showList
    const listItems = shouldDisplayAutoCompleteList
      ? this.state.items
      : this.props.renderEmptySearch

    return (
      <div role="combobox" className={cc([prefix({ autoComplete: true }), this.props.className])}>
        <TextField
          type="search"
          className={this.props.inputClassName}
          name={this.props.name}
          onChange={this.onInputChange}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
          onClear={this.props.onClear}
          placeholder={this.props.placeholder}
          defaultValue={String(this.state.textfieldValue)}
          addon={this.props.inputAddon}
          inputRef={this.inputRef}
          autoCorrect={this.props.autoCorrect}
          autoComplete="off"
          autoFocus={this.props.autoFocus}
          focus={this.props.focus}
          buttonTitle={this.props.buttonTitle}
          disabled={this.props.disabled}
          readOnly={this.props.readOnly}
          required={this.props.required}
          error={this.props.error}
          focusBorder={false}
        />
        {shouldDisplayBusyState && (
          <div className={cc([prefix({ 'autoComplete-body': true }), this.props.bodyClassName])}>
            {this.props.renderBusy({ query: this.state.query })}
          </div>
        )}
        {shouldDisplayNoResults && (
          <div className={cc([prefix({ 'autoComplete-body': true }), this.props.bodyClassName])}>
            {this.props.renderNoResults({ query: this.state.query })}
          </div>
        )}
        <AutoCompleteList
          className={this.props.bodyClassName}
          name={`${this.props.name}-list`}
          items={listItems}
          maxItems={this.props.maxItems}
          onSelect={this.onSelectItem}
          visible={shouldDisplayAutoCompleteList || shouldDisplayEmptyState}
          selectedItemStatus={this.props.selectedItemStatus}
          itemClassName={this.props.itemClassName}
          onDoneAnimationEnd={this.props.onDoneAnimationEnd}
        />
        <style jsx>{style}</style>
      </div>
    )
  }
}
