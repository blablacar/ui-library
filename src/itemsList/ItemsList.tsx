import React, { FunctionComponent } from 'react'
import cc from 'classcat'

import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { Divider } from '../divider'
import { ItemCheckboxProps } from '../itemCheckbox/ItemCheckbox'
import { ItemChoiceProps } from '../itemChoice'
import { ItemRadioProps } from '../itemRadio/ItemRadio'
import { StyledItemsList } from './ItemsList.style'

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

export type ItemsListProps = A11yProps &
  Readonly<{
    children: ItemsListChild[]
    withSeparators?: boolean
    className?: string
    keyGenerator?: (index: number) => string | number
  }>

export const ItemsList = (props: ItemsListProps) => {
  const {
    children,
    className = '',
    withSeparators = false,
    keyGenerator = (i: number) => i,
  } = props
  const a11yAttrs = pickA11yProps<ItemsListProps>(props)

  return (
    <StyledItemsList className={cc(['kirk-items-list', className])} {...a11yAttrs}>
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
    </StyledItemsList>
  )
}
