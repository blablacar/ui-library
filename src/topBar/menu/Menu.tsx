import React from 'react'
import cc from 'classcat'

import { A11yProps, pickA11yProps } from '../../_utils/interfaces'
import { ItemChoiceProps } from '../../itemChoice'
import { ItemsList, ItemsListDivider } from '../../itemsList'

export type MenuProps = A11yProps &
  Readonly<{
    children: React.ReactElement<ItemChoiceProps>[]
    className?: string
    withSeparators?: boolean
  }>

export const Menu = ({ className, children, withSeparators = false, ...props }: MenuProps) => {
  const a11yAttrs = pickA11yProps<MenuProps>({ ...props, className, children, withSeparators })

  return (
    /* TODO: BBC-7416 fix a11y issue */
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
    <nav className={cc(className)} {...a11yAttrs} role="menu">
      <ItemsList withSeparators={withSeparators}>{children}</ItemsList>
    </nav>
  )
}

Menu.Divider = ItemsListDivider
