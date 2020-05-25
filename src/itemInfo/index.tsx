import React from 'react'

import { Item } from '../_internals/item'
import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { NormalizeProps } from '../layout/layoutNormalizer'

export interface ItemInfoProps extends A11yProps, NormalizeProps {
  readonly mainInfo?: string
  readonly className?: string
  readonly icon?: React.ReactNode
  readonly mainTitle?: string
  readonly tag?: JSX.Element
}

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

export default ItemInfo
