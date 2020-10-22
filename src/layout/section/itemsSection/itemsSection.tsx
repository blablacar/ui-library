import React from 'react'

import { ItemInfoProps } from '../../../itemInfo'
import { BaseSection } from '../../../layout/section/baseSection'

export type ItemsSectionProps = Readonly<{
  children: React.ReactElement<ItemInfoProps>[]
  className?: string
  noHorizontalSpacing?: boolean
  tag?: JSX.Element
}>

/**
 * Items Section: display a list of items in a display: flex.
 * Use with two items.
 */
export const ItemsSection = (props: ItemsSectionProps) => {
  const { className, children, noHorizontalSpacing, tag = <div /> } = props

  return (
    <BaseSection
      tagName={tag.type}
      className={className}
      contentClassName="kirk-items-section-content"
      noHorizontalSpacing={noHorizontalSpacing}
    >
      {children}
    </BaseSection>
  )
}
