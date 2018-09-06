import React, { Component } from 'react'
import { canUseEventListeners } from 'exenv'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { ItemChoiceStatus } from 'itemChoice'
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
  onDoneAnimationEnd?: () => void,
  itemKey?: (item:AutocompleteItem) => string,
  visible?: boolean,
  selectedItemStatus?: ItemChoiceStatus,
}

export interface AutoCompleteListState {
  readonly highlightedIndex: number,
  readonly selectedIndex: number
}

export default class AutoCompleteList
extends Component <AutoCompleteListProps, AutoCompleteListState> {
  static defaultProps:Partial<AutoCompleteListProps> = {
    maxItems: Infinity,
    itemKey: item => JSON.stringify(item),
    visible: false,
  }

  state:AutoCompleteListState = {
    highlightedIndex: null,
    selectedIndex: null,
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

    if (isEmpty(this.props.items)) return

    const { highlightedIndex } = this.state
    const index = (highlightedIndex === null || highlightedIndex === this.props.items.length - 1)
      ? 0 : highlightedIndex + 1

    this.setState({
      highlightedIndex: index,
    })
  }

  onKeyboardEventArrowUp = (e:Event) => {
    e.preventDefault()

    if (!isEmpty(this.props.items)) {
      const { highlightedIndex } = this.state
      const index = (highlightedIndex === null || highlightedIndex === 0)
        ? this.props.items.length - 1 : highlightedIndex - 1

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
    this.setState({ selectedIndex: this.state.highlightedIndex })
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

  onSelect = (itemIndex: number) => (item: AutocompleteItem) => {
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
        className={cc(['kirk-autoComplete-list', this.props.className])}
        role="listbox"
      >
        {this.props.items.slice(0, this.props.maxItems).map((item, index) => {
          const status = this.state.selectedIndex === index ? (
            this.props.selectedItemStatus
           ) : ItemChoiceStatus.DEFAULT
          console.log(this.props.renderItem({ item, index }))
          return (
            <AutoCompleteListItem
              key={this.props.itemKey(item)}
              item={item}
              className={this.props.itemClassName}
              highlighted={index === this.state.highlightedIndex}
              status={status}
              select={this.onSelect(index)}
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
