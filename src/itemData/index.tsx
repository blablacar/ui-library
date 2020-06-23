import React from 'react'

import { Item } from '../_internals/item'
import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { Button } from '../button/Button'
import { TextDisplayType } from '../text'

export interface ItemDataProps extends A11yProps {
  readonly data: string | JSX.Element
  readonly dataStrikeThrough?: boolean
  readonly dataAriaLabel?: string
  readonly mainInfo: React.ReactNode
  readonly className?: string
  readonly mainTitle?: string
  readonly mainTitleButtonAddon?: React.ReactElement<Button>
  readonly dataInfo?: string
  readonly tag?: JSX.Element
  readonly ariaLabel?: string
  readonly disabled?: boolean
}

export const ItemData = (props: ItemDataProps) => {
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
    disabled,
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
      disabled={disabled}
      {...a11yAttrs}
    />
  )
}

export default ItemData
