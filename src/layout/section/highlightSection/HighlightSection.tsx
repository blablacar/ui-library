import React from 'react'

import { SectionContentSize } from '../../../layout/section/baseSection'
import { StyledHighlightSection } from './HighlightSection.style'

export type HighlightSectionProps = Readonly<{
  className?: string
  contentClassName?: string
  children: React.ReactNode
}>

/**
 * A specialized section with an highlighting background color.
 */
export const HighlightSection = (props: HighlightSectionProps) => {
  const { className, children, contentClassName } = props
  return (
    <StyledHighlightSection
      tagName="article"
      className={className}
      contentClassName={contentClassName}
      contentSize={SectionContentSize.LARGE}
    >
      {children}
    </StyledHighlightSection>
  )
}
