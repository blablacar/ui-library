import React from 'react'

import Item, { ItemProps } from '_utils/item/index'

interface ItemInfoProps {
  mainInfo: string,
  className?: Classcat.Class,
  icon?: React.ReactNode,
  mainTitle?: string,
  tag?: string,
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
