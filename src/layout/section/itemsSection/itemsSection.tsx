import React from 'react'

import { ItemInfoProps } from 'itemInfo'

import BaseSection from 'layout/section/baseSection'

export interface ItemsSectionProps {
  readonly children: React.ReactElement<ItemInfoProps>[]
  readonly className?: Classcat.Class
  readonly tag?: JSX.Element
}

/**
 * Items Section: display a list of items in a display: flex.
 * Use with two items.
 */
const ItemsSection = (props: ItemsSectionProps) => {
  const { className, children, tag = <div /> } = props

  return (
    <BaseSection
      tagName={tag.type}
      className={className}
      contentClassName="kirk-items-section-content"
    >
      {children}
    </BaseSection>
  )
}

export default ItemsSection
