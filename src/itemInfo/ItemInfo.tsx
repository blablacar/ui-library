import React from 'react'

import { Item } from '../_internals/item'
import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { NormalizeProps } from '../layout/layoutNormalizer'

export type ItemInfoProps = A11yProps &
  NormalizeProps &
  Readonly<{
    mainInfo?: string
    className?: string
    icon?: React.ReactNode
    mainTitle?: string
    tag?: JSX.Element
  }>

export const ItemInfo = (props: ItemInfoProps) => {
  const { mainInfo, className, mainTitle, icon, tag, hasHorizontalSpacing = false } = props
  const a11yAttrs = pickA11yProps<ItemInfoProps>(props)

  return (
    <Item
      className={className}
      leftTitle={mainTitle}
      leftBody={mainInfo}
      leftAddon={icon}
      tag={tag}
      hasHorizontalSpacing={hasHorizontalSpacing}
      {...a11yAttrs}
    />
  )
}

ItemInfo
