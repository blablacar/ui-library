import React from 'react'
import cc from 'classcat'
import menuItemStyle from './menuItemStyle'

export interface MenuItemProps {
  id: string,
  label?: string,
  url?: string,
  separator?: boolean,
}

const MenuItem = ({ id, label = '', url = '', separator = false }: MenuItemProps) => (
  <li
    id={id}
    className={cc({ separator })}
    role="menuitem"
  >
    {!separator && (
      <a href={url}>{label}</a>
    )}
    <style jsx>{menuItemStyle}</style>
  </li>
)

export default MenuItem
