import React from 'react'

import Item from '_utils/item'
import { TextDisplayType } from 'text'

interface ItemDataProps {
  readonly data: string
  readonly mainInfo: string
  readonly className?: Classcat.Class
  readonly mainTitle?: string
  readonly dataStrikeThrough?: boolean
  readonly dataInfo?: string
  readonly tag?: JSX.Element
  readonly ariaLabel?: string
}

const ItemData = ({
  mainInfo,
  data,
  dataStrikeThrough,
  className,
  mainTitle,
  dataInfo,
  tag,
  ariaLabel,
}: ItemDataProps) => {
  return (
    <Item
      className={className}
      leftTitle={mainTitle}
      leftBody={mainInfo}
      rightTitle={data}
      rightTitleStrikeThrough={dataStrikeThrough}
      rightTitleDisplay={TextDisplayType.SUBHEADERSTRONG}
      rightBody={dataInfo}
      tag={tag}
      ariaLabel={ariaLabel}
    />
  )
}

export default ItemData
