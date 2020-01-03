import React from 'react'

import Item from '_utils/item'
import { TextDisplayType } from 'text'
import Button from 'button/Button'

interface ItemDataProps {
  readonly data: string
  readonly mainInfo: string
  readonly className?: Classcat.Class
  readonly mainTitle?: string
  readonly mainTitleButtonAddon?: React.ReactElement<Button>
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
  mainTitleButtonAddon,
  dataInfo,
  tag,
  ariaLabel,
}: ItemDataProps) => (
  <Item
    className={className}
    leftTitle={mainTitle}
    leftTitleButtonAddon={mainTitleButtonAddon}
    leftBody={mainInfo}
    rightTitle={data}
    rightTitleStrikeThrough={dataStrikeThrough}
    rightTitleDisplay={TextDisplayType.SUBHEADERSTRONG}
    rightBody={dataInfo}
    tag={tag}
    ariaLabel={ariaLabel}
  />
)

export default ItemData
