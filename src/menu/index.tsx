import React from 'react'
import cc from 'classcat'
import ItemChoice, { ItemChoiceProps } from 'itemChoice'

interface MenuItemChoiceProps extends ItemChoiceProps {
  id?: string | number
}

interface MenuProps {
  items: MenuItemChoiceProps[]
  className?: Classcat.Class
}

const Menu = ({ className, items }: MenuProps) => (
  <nav className={cc(className)} role="menu">
    {items.map(item => (
      <ItemChoice
        label={item.label}
        href={item.href}
        leftAddon={item.leftAddon}
        rightAddon={item.rightAddon}
        key={item.id}
        onClick={item.onClick}
        status={item.status}
      />
    ))}
  </nav>
)

export default Menu
