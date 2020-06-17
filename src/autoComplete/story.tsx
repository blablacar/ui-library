import React, { Component } from 'react'
import { boolean, number, select, text } from '@storybook/addon-knobs'

import { ItemStatus } from '../_utils/item'
import { ComfortIcon } from '../icon/comfortIcon'
import { AutoComplete, AutocompleteItem, AutocompleteOnChange } from './index'

export default {
  title: 'Widget|AutoComplete',
  component: AutoComplete,
}

const places: AutocompleteItem[] = [
  {
    id: '1',
    label: 'Paris Saint Lazare',
    labelInfo: 'Rue d’Amsterdam, Paris',
    leftAddon: <ComfortIcon />,
  },
  { id: '2', label: 'Paris Gare de Lyon', labelInfo: 'Rue d’Amsterdam, Paris' },
  { id: '3', label: 'Paris Rive Gauche' },
]

interface AutoCompleteExampleProps {
  readonly searchOnMount?: boolean
  readonly searchForItemsDelay?: number
  readonly renderEmptySearch?: AutocompleteItem[]
  readonly className?: string
  readonly inputAddon?: React.ReactElement
  readonly onSelect?: (obj: AutocompleteOnChange) => void
  readonly autoFocus?: boolean
  readonly placeholder?: string
  readonly embeddedInSearchForm?: boolean
}

interface AutoCompleteExampleState {
  readonly isSearching: boolean
  readonly items: AutocompleteItem[]
}

export class AutoCompleteExample extends Component<
  AutoCompleteExampleProps,
  AutoCompleteExampleState
> {
  state: AutoCompleteExampleState = {
    isSearching: false,
    items: [],
  }

  static defaultProps: AutoCompleteExampleProps = {
    searchOnMount: true,
    searchForItemsDelay: 0,
    renderEmptySearch: [],
    onSelect() {},
    autoFocus: false,
    placeholder: 'Search here',
    embeddedInSearchForm: false,
  }

  searchForItems = (query: string) => {
    this.setState({ isSearching: true })

    setTimeout(() => {
      this.setState({
        items: places.filter(place => place.label.startsWith(query)),
        isSearching: false,
      })
    }, this.props.searchForItemsDelay)
  }

  render() {
    const error = boolean('error', false)

    return (
      <AutoComplete
        className={this.props.className}
        name="city"
        placeholder={this.props.placeholder}
        defaultValue={text('defaultValue')}
        searchOnMount={boolean('searchOnMount', true)}
        isSearching={this.state.isSearching}
        searchForItems={this.searchForItems}
        items={this.state.items}
        renderEmptySearch={this.props.renderEmptySearch}
        onSelect={this.props.onSelect}
        getItemValue={item => item.id}
        renderQuery={item => item.label}
        error={error ? text('error message', 'something went wrong') : ''}
        maxItems={number('maxItems', 5)}
        showList={boolean('showList', true)}
        searchForItemsMinChars={number('searchForItemsMinChars', 3)}
        selectedItemStatus={select(
          'selectedItemStatus',
          [ItemStatus.DEFAULT, ItemStatus.LOADING, ItemStatus.CHECKED],
          ItemStatus.DEFAULT,
        )}
        autoCorrect={select('autoCorrect', { on: 'on', off: 'off' }, 'off')}
        disabled={boolean('disabled', false)}
        readOnly={boolean('readOnly', false)}
        required={boolean('required', false)}
        inputAddon={this.props.inputAddon}
        autoFocus={this.props.autoFocus}
        embeddedInSearchForm={this.props.embeddedInSearchForm}
      />
    )
  }
}

// Type <code>Paris</code> to test auto-completion.

export const Basic = () => <AutoCompleteExample />

export const WithBusyState = () => <AutoCompleteExample searchForItemsDelay={1500} />

export const WithEmptySearch = () => {
  const emptySearch = [
    { id: '1', label: 'Get my location', labelInfo: '' },
    { id: '2', label: 'Favorite address', labelInfo: '' },
  ]

  return <AutoCompleteExample renderEmptySearch={emptySearch} />
}
