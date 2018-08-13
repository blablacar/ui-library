import React from 'react'

import Item, { ItemProps } from '_utils/item/index'

interface ItemInfoProps extends ItemProps {
  mainInfo: string,
  mainTitle?: string,
  icon?: React.ReactNode,
}

const ItemInfo = ({
  mainInfo,
  className,
  mainTitle,
  icon,
  tag,
}:ItemInfoProps) => {
  return (
    <Item
      className={className}
      leftTitle={mainTitle}
      leftBody={mainInfo}
      leftAddon={icon}
      tag={tag}
    />
  )
}

export default ItemInfo
