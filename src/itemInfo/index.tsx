import React from 'react'

import { A11yProps, pickA11yProps } from '_utils/interfaces'
import Item from '_utils/item'

export interface ItemInfoProps extends A11yProps {
  readonly mainInfo: string
  readonly className?: string
  readonly icon?: React.ReactNode
  readonly mainTitle?: string
  readonly tag?: JSX.Element
  readonly ariaLabel?: string
}

const ItemInfo = (props: ItemInfoProps) => {
  const { mainInfo, className, mainTitle, icon, tag, ariaLabel } = props
  const a11yAttrs = pickA11yProps<ItemInfoProps>(props)

  return (
    <Item
      className={className}
      leftTitle={mainTitle}
      leftBody={mainInfo}
      leftAddon={icon}
      tag={tag}
      ariaLabel={ariaLabel}
      {...a11yAttrs}
    />
  )
}

export default ItemInfo
