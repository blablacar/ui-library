import React from 'react'
import cc from 'classcat'
import { ItemChoiceProps } from 'itemChoice'
import ItemsList, { ItemsListDivider } from 'itemsList'

export interface MenuProps {
  readonly children: React.ReactElement<ItemChoiceProps>[]
  readonly className?: Classcat.Class
  readonly withSeparators?: boolean
}

const Menu = ({ className, children, withSeparators = false }: MenuProps) => (
  <nav className={cc(className)} role="menu">
    <ItemsList withSeparators={withSeparators}>{children}</ItemsList>
  </nav>
)

Menu.Divider = ItemsListDivider

export default Menu
