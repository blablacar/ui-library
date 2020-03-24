import React from 'react'

import Item from '_utils/item'
import { A11yProps, pickA11yProps } from '_utils/interfaces'
import { TextDisplayType } from 'text'
import Button from 'button/Button'

export interface ItemDataProps extends A11yProps {
  readonly data: string | JSX.Element
  readonly dataStrikeThrough?: boolean
  readonly dataAriaLabel?: string
  readonly mainInfo: string
  readonly className?: Classcat.Class
  readonly mainTitle?: string
  readonly mainTitleButtonAddon?: React.ReactElement<Button>
  readonly dataInfo?: string
  readonly tag?: JSX.Element
  readonly ariaLabel?: string
}

const ItemData = (props: ItemDataProps) => {
  const {
    mainInfo,
    data,
    dataStrikeThrough,
    dataAriaLabel,
    className,
    mainTitle,
    mainTitleButtonAddon,
    dataInfo,
    tag,
    ariaLabel,
  } = props
  const a11yAttrs = pickA11yProps<ItemDataProps>(props)
  return (
    <Item
      className={className}
      leftTitle={mainTitle}
      leftTitleButtonAddon={mainTitleButtonAddon}
      leftBody={mainInfo}
      rightTitle={data}
      rightTitleStrikeThrough={dataStrikeThrough}
      rightTitleAriaLabel={dataAriaLabel}
      rightTitleDisplay={TextDisplayType.SUBHEADERSTRONG}
      rightBody={dataInfo}
      tag={tag}
      ariaLabel={ariaLabel}
      {...a11yAttrs}
    />
  )
}

export default ItemData
