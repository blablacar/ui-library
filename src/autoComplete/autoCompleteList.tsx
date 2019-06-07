import React, { Component } from 'react'
import { canUseEventListeners } from 'exenv'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import prefix from '_utils'
import { ItemStatus } from '_utils/item'
import ItemChoice from 'itemChoice'
import style from './autoCompleteListStyle'

export interface AutoCompleteListProps {
  name: string
  onSelect?: (item: AutocompleteItem) => void
  className?: Classcat.Class
  items?: AutocompleteItem[]
  maxItems?: number
  itemClassName?: Classcat.Class
  onDoneAnimationEnd?: () => void
  itemKey?: (item: AutocompleteItem) => string
  visible?: boolean
  selectedItemStatus?: ItemStatus
}

export interface AutoCompleteListState {
  readonly highlightedIndex: number
  readonly selectedIndex: number
}

export default class AutoCompleteList extends Component<
  AutoCompleteListProps,
  AutoCompleteListState
> {
  static defaultProps: Partial<AutoCompleteListProps> = {
    maxItems: Infinity,
    itemKey: item => JSON.stringify(item),
    visible: false,
  }

  state: AutoCompleteListState = {
    highlightedIndex: null,
    selectedIndex: null,
  }

  componentWillReceiveProps(nextProps: AutoCompleteListProps) {
    this.setState({
      highlightedIndex: null,
    })

    if (canUseEventListeners && nextProps.visible !== this.props.visible) {
      if (nextProps.visible) {
        document.addEventListener('keydown', this.handleKeydown)
      } else {
        document.removeEventListener('keydown', this.handleKeydown)
      }
    }
  }

  componentWillUnmount() {
    if (this.props.visible && canUseEventListeners) {
      document.removeEventListener('keydown', this.handleKeydown)
    }
  }

  onKeyboardEventArrowDown = (e: Event) => {
    e.preventDefault()

    if (isEmpty(this.props.items)) return

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
    if (this.state.highlightedIndex == null) {
      return
    }
    e.preventDefault()

    const item = this.props.items[this.state.highlightedIndex]
    this.setState({ selectedIndex: this.state.highlightedIndex })
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
      <ul
        key={this.props.name}
        className={cc([prefix({ 'autoComplete-list': true }), this.props.className])}
        role="listbox"
      >
        {this.props.items.slice(0, this.props.maxItems).map((item, index) => {
          const status =
            this.state.selectedIndex === index
              ? this.props.selectedItemStatus
              : ItemChoice.STATUS.DEFAULT
          const isHighlighted = index === this.state.highlightedIndex
          const { id, ...itemChoiceProps } = item
          return (
            <li key={this.props.itemKey(item)}>
              <ItemChoice
                {...itemChoiceProps}
                className={this.props.itemClassName}
                style={isHighlighted ? ItemChoice.STYLE.RECOMMENDED : ItemChoice.STYLE.PRIMARY}
                status={status}
                onMouseDown={() => {
                  this.onSelect(index, item)
                }}
                onDoneAnimationEnd={this.props.onDoneAnimationEnd}
              />
            </li>
          )
        })}
        <style jsx key={`${this.props.name}-style-jsx`}>
          {style}
        </style>
      </ul>
    )
  }
}
