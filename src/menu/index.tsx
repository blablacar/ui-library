import React from 'react'
import cc from 'classcat'
import ItemChoice, { ItemChoiceProps } from 'itemChoice'

interface MenuItemChoiceProps {
  readonly id?: string | number
  readonly label?: string
  readonly href: string
  readonly leftAddon?: React.ReactNode
}

interface MenuProps {
  items: MenuItemChoiceProps[],
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
