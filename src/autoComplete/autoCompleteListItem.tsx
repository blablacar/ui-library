import React, { Component, Fragment } from 'react'
import ItemChoice, { ItemChoiceStatus } from 'itemChoice'
import cc from 'classcat'

export interface AutoCompleteListItemProps {
  readonly item: AutocompleteItem,
  readonly select: (item:AutocompleteItem) => void,
  readonly className?: Classcat.Class,
  readonly highlighted?: boolean,
  readonly status?: ItemChoiceStatus,
  readonly onDoneAnimationEnd?: () => void,
}

export default class AutoCompleteListItem extends Component <AutoCompleteListItemProps> {
  static defaultProps: Partial<AutoCompleteListItemProps> = {
    highlighted: false,
    status: ItemChoice.STATUS.DEFAULT,
  }

  static STATUS = ItemChoiceStatus

  onMouseDown = () => {
    this.props.select(this.props.item)
  }

  render() {
    return (
      <ItemChoice
        status={this.props.status}
        selected={this.props.highlighted}
        className={cc(['kirk-autoComplete-item', this.props.className])}
        label={this.props.item.title}
        subLabel={this.props.item.description}
        leftAddon={this.props.item.icon}
        onMouseDown={this.onMouseDown}
        onDoneAnimationEnd={this.props.onDoneAnimationEnd}
      />
    )
  }
}
