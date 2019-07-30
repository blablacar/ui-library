import React, { Component, FunctionComponent } from 'react'
import cc from 'classcat'

import { ItemChoiceProps } from 'itemChoice'
import { ItemRadioProps } from 'itemRadio/itemRadio'
import { ItemCheckboxProps } from 'itemCheckbox'

import style from './style'

export const ItemsListDivider: FunctionComponent = () => null

type ItemsListChild =
  | React.ReactElement<ItemChoiceProps>
  | React.ReactElement<ItemRadioProps>
  | React.ReactElement<ItemCheckboxProps>
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
    let separator = false
    return (
      <ul
        className={cc([
          'kirk-items-list',
          className,
          { [`kirk-items-list--withSeparators`]: withSeparators },
        ])}
        {...otherProps}
      >
        {children.map((item, index) => {
          let child = null
          if (item.type === ItemsListDivider && !withSeparators) {
            separator = true
          } else if (item.type !== ItemsListDivider && item.type !== undefined) {
            child = (
              <li
                className={cc([
                  'kirk-items-list-item',
                  { [`kirk-items-list-item--withSeparator`]: separator },
                ])}
                key={keyGenerator(index)}
              >
                {item}
              </li>
            )
            separator = false
          }
          return child
        })}
        <style jsx>{style}</style>
      </ul>
    )
  }
}

export default ItemsList
