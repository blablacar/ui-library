import React, { Component } from 'react'
import { canUseEventListeners } from 'exenv'
import cc from 'classcat'
import prefix from '_utils'
import AutoCompleteListItem from './autoCompleteListItem'
import style from './autoCompleteListStyle'

export interface AutoCompleteListProps {
  name: string,
  renderItem: (itemToRender:AutocompleteItemToRender) => React.ReactElement<any>,
  onSelect?: (item:AutocompleteItem) => void,
  className?: Classcat.Class,
  items?: AutocompleteItem[],
  maxItems?: number,
  itemClassName?: Classcat.Class,
  loadingItemIndex?: number,
  valid?: boolean,
  onDoneAnimationEnd?: () => void,
  itemKey?: (item:AutocompleteItem) => string,
  visible?: boolean,
}

export interface AutoCompleteListState {
  readonly highlightedIndex: number
}

export default class AutoCompleteList
extends Component <AutoCompleteListProps, AutoCompleteListState> {
  static defaultProps:Partial<AutoCompleteListProps> = {
    maxItems: Infinity,
    itemKey: item => JSON.stringify(item),
    visible: false,
    loadingItemIndex: -1,
  }

  state:AutoCompleteListState = {
    highlightedIndex: null,
  }

  componentWillReceiveProps(nextProps:AutoCompleteListProps) {
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

  onKeyboardEventArrowDown = (e:Event) => {
    e.preventDefault()

    const itemsLength = this.props.items.length
    if (!itemsLength) return

    const { highlightedIndex } = this.state
    const index = (highlightedIndex === null || highlightedIndex === itemsLength - 1)
      ? 0 : highlightedIndex + 1

    this.setState({
      highlightedIndex: index,
    })
  }

  onKeyboardEventArrowUp = (e:Event) => {
    e.preventDefault()

    const itemsLength = this.props.items.length
    if (itemsLength) {
      const { highlightedIndex } = this.state
      const index = (highlightedIndex === null || highlightedIndex === 0)
        ? itemsLength - 1 : highlightedIndex - 1

      this.setState({
        highlightedIndex: index,
      })
    }
  }

  onKeyboardEventEnter = (e:Event) => {
    if (this.state.highlightedIndex == null) {
      return
    }
    e.preventDefault()

    const item = this.props.items[this.state.highlightedIndex]
    this.props.onSelect(item)
  }

  handleKeydown = (e:KeyboardEvent) => {
    if (e.keyCode === 13) {
      this.onKeyboardEventEnter(e)
    } else if (e.keyCode === 38) {
      this.onKeyboardEventArrowUp(e)
    } else if (e.keyCode === 40) {
      this.onKeyboardEventArrowDown(e)
    }
  }

  render() {
    if (!this.props.visible || this.props.items.length <= 0) {
      return null
    }

    return (
      <ul
        key={this.props.name}
        className={cc([prefix({ 'autoComplete-list': true }), this.props.className])}
        role="listbox"
      >
        {this.props.items.slice(0, this.props.maxItems).map((item, index) => {
          let status = AutoCompleteListItem.STATUS.DEFAULT
          if (index === this.props.loadingItemIndex) {
            status = AutoCompleteListItem.STATUS.LOADING
          }
          if (index === this.props.loadingItemIndex && this.props.valid) {
            status = AutoCompleteListItem.STATUS.CHECKED
          }
          return (
            <AutoCompleteListItem
              key={this.props.itemKey(item)}
              item={item}
              className={this.props.itemClassName}
              highlighted={index === this.state.highlightedIndex}
              status={status}
              select={this.props.onSelect}
              onDoneAnimationEnd={this.props.onDoneAnimationEnd}
            >
              <div>
                {this.props.renderItem({ item, index })}
              </div>
            </AutoCompleteListItem>
          )
        })}
        <style jsx key={`${this.props.name}-style-jsx`}>{style}</style>
      </ul>
    )
  }
}
