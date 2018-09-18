import React, { Component } from 'react'
import ItemChoice, { ItemChoiceStatus } from 'itemChoice'

export interface AutoCompleteListItemProps {
  readonly item: AutocompleteItem
  readonly select: (item: AutocompleteItem) => void
  readonly className?: Classcat.Class
  readonly status?: ItemChoiceStatus
  readonly onDoneAnimationEnd?: () => void
}

export default class AutoCompleteListItem extends Component<AutoCompleteListItemProps> {
  static defaultProps: Partial<AutoCompleteListItemProps> = {
    status: ItemChoice.STATUS.DEFAULT,
  }

  static STATUS = ItemChoiceStatus

  onMouseDown = () => {
    this.props.select(this.props.item)
  }

  render() {
    return (
      <ItemChoice
        href={<button />}
        narrow
        status={this.props.status}
        className={this.props.className}
        label={this.props.item.title}
        subLabel={this.props.item.description}
        leftAddon={this.props.item.icon}
        onMouseDown={this.onMouseDown}
        onDoneAnimationEnd={this.props.onDoneAnimationEnd}
      />
    )
  }
}
