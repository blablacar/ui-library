import React from 'react'
import cc from 'classcat'
import MenuItem, { MenuItemProps } from './menuItem'
import style from './style'

export interface MenuProps {
  items: MenuItemProps[],
  className?: Classcat.Class,
}

const Menu = ({ className, items }: MenuProps) => (
  <ul className={cc(className)} role="menu">
    {items.map(item => <MenuItem {...item} key={item.id} />)}
    <style jsx>{style}</style>
  </ul>
)

export default Menu
