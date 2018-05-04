import React, { Component } from 'react'
import ItemChoice from 'itemChoice'
import cc from 'classcat'

export interface AutoCompleteListItemProps {
  readonly item: AutocompleteItem,
  readonly select: (item:AutocompleteItem) => void,
  readonly children: React.ReactElement<any>,
  readonly className?: Classcat.Class,
  readonly highlighted?: boolean,
  readonly loading?: boolean,
  readonly valid?: boolean,
  readonly validated?: () => void,
}

export default class AutoCompleteListItem extends Component <AutoCompleteListItemProps> {
  static defaultProps: Partial<AutoCompleteListItemProps> = {
    highlighted: false,
    loading: false,
    valid: false,
  }

  onMouseDown = () => {
    this.props.select(this.props.item)
  }

  render() {
    return (
      <ItemChoice
        loading={this.props.loading}
        selected={this.props.highlighted}
        className={cc(['kirk-autoComplete-item', this.props.className])}
        onMouseDown={this.onMouseDown}
        valid={this.props.valid}
        validated={this.props.validated}
      >
        {this.props.children}
      </ItemChoice>
    )
  }
}
