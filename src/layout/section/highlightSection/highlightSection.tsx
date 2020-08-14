import React from 'react'

import { BaseSection, SectionContentSize } from '../../../layout/section/baseSection'
import { SubHeader } from '../../../subHeader'

export type HighlightSectionProps = Readonly<{
  className?: string
  contentClassName?: string
  children: React.ReactNode
  title?: string
}>

/**
 * A specialized section with an highlighting background color.
 */
export const HighlightSection = (props: HighlightSectionProps) => {
  const { className, children, contentClassName, title } = props
  return (
    <BaseSection
      tagName="article"
      className={className}
      contentClassName={contentClassName}
      contentSize={SectionContentSize.LARGE}
    >
      {title && <SubHeader>{title}</SubHeader>}
      {children}
    </BaseSection>
  )
}
