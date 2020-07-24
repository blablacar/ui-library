import React from 'react'
import styled from 'styled-components'

import Item from '../_internals/item'
import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { NormalizeProps } from '../layout/layoutNormalizer'
import { TextDisplay2 } from '../typography/display2'

export interface ItemBigDataProps extends NormalizeProps, A11yProps {
  readonly mainInfo?: string
  readonly className?: string
  readonly mainTitle?: string
  readonly tag?: JSX.Element
}

const StyledItemBigData = styled(Item)`
  & .kirk-item-leftText {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    .kirk-text-body {
      white-space: normal;
    }
  }
`

export const ItemBigData = (props: ItemBigDataProps) => {
  const { mainInfo, className, mainTitle, tag, hasHorizontalSpacing = false } = props
  const a11yAttrs = pickA11yProps<ItemBigDataProps>(props)

  return (
    <StyledItemBigData
      className={className}
      leftTitle={<TextDisplay2>{mainTitle}</TextDisplay2>}
      leftBody={mainInfo}
      tag={tag}
      hasHorizontalSpacing={hasHorizontalSpacing}
      {...a11yAttrs}
    />
  )
}
