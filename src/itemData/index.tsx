import React from 'react'

import Item, { ItemProps } from '_utils/item'
import { TextDisplayType } from 'text'

interface ItemDataProps extends ItemProps {
  data: string,
  mainInfo: string,
  mainTitle?: string,
  dataInfo?: string,
}

const ItemData = ({
  mainInfo,
  data,
  className,
  mainTitle,
  dataInfo,
  tag,
}:ItemDataProps) => {
  return (
    <Item
      className={className}
      leftTitle={mainTitle}
      leftBody={mainInfo}
      rightTitle={data}
      rightTitleDisplay={TextDisplayType.SUBHEADERSTRONG}
      rightBody={dataInfo}
      tag={tag}
    />
  )
}

export default ItemData
