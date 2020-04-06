import React, { Component, FunctionComponent } from 'react'
import cc from 'classcat'

import { ItemChoiceProps } from 'itemChoice'
import { ItemRadioProps } from 'itemRadio/ItemRadio'
import { ItemCheckboxProps } from 'itemCheckbox/ItemCheckbox'
import Divider from 'divider'

export const ItemsListDivider: FunctionComponent = () => null

export type ItemsListChild =
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

  render() {
    const { children, className, withSeparators, keyGenerator, ...otherProps } = this.props

    return (
      <ul className={cc(['kirk-items-list', className])} {...otherProps}>
        {children.map((item, index) => {
          if (item.type === ItemsListDivider || item.type === undefined) {
            return null
          }

          const isLast = children.length === index + 1
          const hasSeparator =
            !isLast && (children[index + 1].type === ItemsListDivider || withSeparators)

          return (
            <li className={cc(['kirk-items-list-item'])} key={keyGenerator(index)}>
              {item}
              {hasSeparator && <Divider />}
            </li>
          )
        })}
      </ul>
    )
  }
}

export default ItemsList
