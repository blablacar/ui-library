import React, { Component, Fragment } from 'react'
import cc from 'classcat'
import { canUseEventListeners } from 'exenv'
import isEmpty from 'lodash.isempty'
import isEqual from 'lodash.isequal'

import { ItemStatus } from '../_internals/item'
import { prefix } from '../_utils'
import { ItemChoice } from '../itemChoice'
import { ItemsList } from '../itemsList'

export interface AutocompleteItem {
  readonly id: string
  readonly label: string
  readonly labelInfo?: string
  readonly leftAddon?: JSX.Element
}

export type AutoCompleteListProps = Readonly<{
  name: string
  onSelect?: (item: AutocompleteItem) => void
  className?: string
  items?: AutocompleteItem[]
  maxItems?: number
  itemClassName?: string
  onDoneAnimationEnd?: () => void
  itemKey?: (item: AutocompleteItem) => string
  visible?: boolean
  selectedItemStatus?: ItemStatus
  withSeparators?: boolean
}>

type AutoCompleteListState = {
  highlightedIndex: number
  selectedIndex: number
}

export class AutoCompleteList extends Component<AutoCompleteListProps, AutoCompleteListState> {
  static defaultProps: Partial<AutoCompleteListProps> = {
    maxItems: Infinity,
    itemKey: ({ leftAddon, ...item }) => JSON.stringify(item),
    visible: false,
    withSeparators: true,
  }

  state: AutoCompleteListState = {
    highlightedIndex: null,
    selectedIndex: null,
  }

  componentDidMount() {
    if (canUseEventListeners) {
      document.addEventListener('keydown', this.handleKeydown)
    }
  }

  componentDidUpdate(prevProps: AutoCompleteListProps) {
    if (!isEqual(prevProps.items, this.props.items)) {
      this.setState({
        highlightedIndex: null,
      })
    }
  }

  componentWillUnmount() {
    if (canUseEventListeners) {
      document.removeEventListener('keydown', this.handleKeydown)
    }
  }

  onKeyboardEventArrowDown = (e: Event) => {
    e.preventDefault()

    if (isEmpty(this.props.items)) {
      return
    }

    const { highlightedIndex } = this.state
    const index =
      highlightedIndex === null || highlightedIndex === this.props.items.length - 1
        ? 0
        : highlightedIndex + 1

    this.setState({
      highlightedIndex: index,
    })
  }

  onKeyboardEventArrowUp = (e: Event) => {
    e.preventDefault()

    if (!isEmpty(this.props.items)) {
      const { highlightedIndex } = this.state
      const index =
        highlightedIndex === null || highlightedIndex === 0
          ? this.props.items.length - 1
          : highlightedIndex - 1

      this.setState({
        highlightedIndex: index,
      })
    }
  }

  onKeyboardEventEnter = (e: Event) => {
    e.preventDefault()

    const { highlightedIndex } = this.state

    if (highlightedIndex == null) {
      return
    }

    const item = this.props.items[highlightedIndex]
    this.setState({ selectedIndex: highlightedIndex })
    this.props.onSelect(item)
  }

  handleKeydown = (e: KeyboardEvent) => {
    if (e.keyCode === 13) {
      this.onKeyboardEventEnter(e)
    } else if (e.keyCode === 38) {
      this.onKeyboardEventArrowUp(e)
    } else if (e.keyCode === 40) {
      this.onKeyboardEventArrowDown(e)
    }
  }

  onSelect = (itemIndex: number, item: AutocompleteItem) => {
    this.setState({ selectedIndex: itemIndex }, () => {
      this.props.onSelect(item)
    })
  }

  render() {
    if (!this.props.visible || isEmpty(this.props.items)) {
      return null
    }

    return (
      <Fragment>
        <ItemsList
          className={cc([prefix({ 'autoComplete-list': true }), this.props.className])}
          keyGenerator={(index: number) => this.props.itemKey(this.props.items[index])}
          role="listbox"
          withSeparators={this.props.withSeparators}
        >
          {this.props.items.slice(0, this.props.maxItems).map((item, index) => {
            const status =
              this.state.selectedIndex === index
                ? this.props.selectedItemStatus
                : ItemStatus.DEFAULT
            const isHighlighted = index === this.state.highlightedIndex
            const { id, ...itemChoiceProps } = item
            return (
              <ItemChoice
                {...itemChoiceProps}
                className={cc([this.props.itemClassName, { highlight: isHighlighted }])}
                status={status}
                onClick={() => {
                  this.onSelect(index, item)
                }}
                onDoneAnimationEnd={this.props.onDoneAnimationEnd}
                key={this.props.itemKey(item)}
                tabIndex={-1}
              />
            )
          })}
        </ItemsList>
      </Fragment>
    )
  }
}
