import React, { Component, FunctionComponent } from 'react'
import cc from 'classcat'

import { ItemChoiceProps } from 'itemChoice'

import style from './style'

export const ItemsListDivider: FunctionComponent = () => null

type ItemsListChild = React.ReactElement<ItemChoiceProps> | null

export interface ItemsListProps {
  readonly children: ItemsListChild[]
  readonly withSeparators?: boolean
  readonly className?: Classcat.Class
}

class ItemsList extends Component<ItemsListProps> {
  static defaultProps: Partial<ItemsListProps> = {
    withSeparators: false,
    className: '',
  }

  static Divider = ItemsListDivider

  render() {
    const { children, className, withSeparators } = this.props
    const { list } = children.reduce(
      (
        acc: {
          list: ItemsListChild[]
          separator: boolean
        },
        item: ItemsListChild,
        index,
      ) => {
        if (item.type === ItemsListDivider && !withSeparators) {
          acc.separator = true
        } else if (item.type !== ItemsListDivider) {
          acc.list.push(
            <li
              className={cc([
                'kirk-items-list-item',
                { [`kirk-items-list-item--withSeparator`]: acc.separator },
              ])}
              key={index}
            >
              {item}
            </li>,
          )
          acc.separator = false
        }
        return acc
      },
      { list: [], separator: false },
    )
    return (
      <ul
        className={cc([
          'kirk-items-list',
          className,
          { [`kirk-items-list--withSeparators`]: withSeparators },
        ])}
      >
        {list}
        <style jsx>{style}</style>
      </ul>
    )
  }
}

export default ItemsList
