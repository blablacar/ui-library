import React, { Component, FunctionComponent } from 'react'
import cc from 'classcat'

import { Divider } from '../divider'
import { ItemCheckboxProps } from '../itemCheckbox/ItemCheckbox'
import { ItemChoiceProps } from '../itemChoice'
import { ItemRadioProps } from '../itemRadio/ItemRadio'

export const ItemsListDivider: FunctionComponent = () => null

// NOTE: react-hot-loader will update dynamically the type and break type comparisons.
// A pre-rendered type need to be used to fix it.
// See: https://github.com/gaearon/react-hot-loader#checking-element-types
const ItemsListDividerType = (<ItemsListDivider />).type

export type ItemsListChild =
  | React.ReactElement<ItemChoiceProps>
  | React.ReactElement<ItemRadioProps>
  | React.ReactElement<ItemCheckboxProps>
  | null

export interface ItemsListProps {
  readonly children: ItemsListChild[]
  readonly withSeparators?: boolean
  readonly className?: string
  readonly keyGenerator?: (index: number) => string | number
  readonly role?: string
}

export class ItemsList extends Component<ItemsListProps> {
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
          if (item.type === ItemsListDividerType || item.type === undefined) {
            return null
          }

          const isLast = children.length === index + 1
          const hasSeparator =
            !isLast && (children[index + 1].type === ItemsListDividerType || withSeparators)

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
