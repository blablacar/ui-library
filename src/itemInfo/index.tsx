import React from 'react'

import Item from '_utils/item'

export interface ItemInfoProps {
  readonly mainInfo: string
  readonly className?: Classcat.Class
  readonly icon?: React.ReactNode
  readonly mainTitle?: string
  readonly tag?: JSX.Element
  readonly ariaLabel?: string
}

const ItemInfo = ({ mainInfo, className, mainTitle, icon, tag, ariaLabel }: ItemInfoProps) => (
  <Item
    className={className}
    leftTitle={mainTitle}
    leftBody={mainInfo}
    leftAddon={icon}
    tag={tag}
    ariaLabel={ariaLabel}
  />
)

export default ItemInfo
