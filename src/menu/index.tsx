import React from 'react'
import cc from 'classcat'
import ItemChoice, { ItemChoiceProps } from 'itemChoice'

export interface MenuProps {
  items: ItemChoiceProps[],
  className?: Classcat.Class,
}

const Menu = ({ className, items }: MenuProps) => (
  <nav className={cc(className)} role="menu">
    {items.map(item => (
      <ItemChoice
        label={item.label}
        href={item.href}
        leftAddon={item.leftAddon}
        key={item.id} />
      ),
    )}
  </nav>
)

export default Menu
