import React from 'react'
import cc from 'classcat'
import ItemChoice, { ItemChoiceProps } from 'itemChoice'
import ItemsList, { ItemsListDivider } from 'itemsList'

interface MenuItemChoiceProps extends ItemChoiceProps {
  readonly id?: string | number
  readonly divider?: boolean
}

interface MenuProps {
  readonly items: MenuItemChoiceProps[]
  readonly className?: Classcat.Class
  readonly withSeparators?: boolean
}

const Menu = ({ className, items, withSeparators = false }: MenuProps) => (
  <nav className={cc(className)} role="menu">
    <ItemsList withSeparators={withSeparators}>
      {items.map(item => {
        if (item.divider) {
          return <ItemsListDivider />
        }
        return (
          <ItemChoice
            label={item.label}
            href={item.href}
            leftAddon={item.leftAddon}
            rightAddon={item.rightAddon}
            key={item.id}
            onClick={item.onClick}
            status={item.status}
          />
        )
      })}
    </ItemsList>
  </nav>
)

export default Menu
