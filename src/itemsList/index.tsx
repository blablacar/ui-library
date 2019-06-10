import React, { Component, FunctionComponent } from 'react'
import cc from 'classcat'

import { ItemChoiceProps } from 'itemChoice'
import { ItemRadioProps } from 'itemRadio'

import style from './style'

export const ItemsListDivider: FunctionComponent = () => null

type ItemsListChild =
  | React.ReactElement<ItemChoiceProps>
  | React.ReactElement<ItemRadioProps>
  | null

export interface ItemsListProps {
  readonly children: ItemsListChild[]
  readonly withSeparators?: boolean
  readonly className?: Classcat.Class
  readonly keyGenerator?: (index: number) => string | number
  readonly role?: string
}

class ItemsList extends Component<ItemsListProps> {
  static defaultProps: Partial<ItemsListProps> = {
    withSeparators: false,
    className: '',
    role: '',
    keyGenerator: index => index,
  }

  static Divider = ItemsListDivider

  render() {
    const { children, className, withSeparators, keyGenerator, ...otherProps } = this.props
    const { list } = React.Children.toArray(children).reduce(
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
              key={keyGenerator(index)}
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
        {...otherProps}
      >
        {list}
        <style jsx>{style}</style>
      </ul>
    )
  }
}

export default ItemsList
