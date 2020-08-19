import React from 'react'

import { Item } from '../_internals/item'
import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { Button } from '../button/Button'
import { NormalizeProps } from '../layout/layoutNormalizer'
import { TextDisplayType } from '../text'

export type ItemDataProps = NormalizeProps &
  A11yProps &
  Readonly<{
    data: string | JSX.Element
    dataStrikeThrough?: boolean
    dataAriaProps?: A11yProps
    mainInfo: React.ReactNode
    className?: string
    mainTitle?: string
    mainTitleButtonAddon?: React.ReactElement<Button>
    dataInfo?: string
    tag?: JSX.Element
    disabled?: boolean
  }>

export const ItemData = (props: ItemDataProps) => {
  const {
    mainInfo,
    data,
    dataStrikeThrough,
    dataAriaProps,
    className,
    mainTitle,
    mainTitleButtonAddon,
    dataInfo,
    tag,
    disabled,
    hasHorizontalSpacing = false,
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
      rightTitleAriaProps={dataAriaProps}
      rightTitleDisplay={TextDisplayType.SUBHEADERSTRONG}
      rightBody={dataInfo}
      tag={tag}
      disabled={disabled}
      hasHorizontalSpacing={hasHorizontalSpacing}
      {...a11yAttrs}
    />
  )
}

export default ItemData
