import React from 'react'

import { ItemInfoProps } from '../../../itemInfo'
import { StyledItemsSection } from './ItemsSection.style'

export type ItemsSectionProps = Readonly<{
  children: React.ReactElement<ItemInfoProps>[]
  className?: string
  tag?: JSX.Element
}>

/**
 * Items Section: display a list of items in a display: flex.
 * Use with two items.
 */
export const ItemsSection = (props: ItemsSectionProps) => {
  const { className, children, tag = <div /> } = props

  return (
    <StyledItemsSection
      tagName={tag.type}
      className={className}
      contentClassName="kirk-items-section-content"
      noHorizontalSpacing
    >
      {children}
    </StyledItemsSection>
  )
}
