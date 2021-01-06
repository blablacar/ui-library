import React from 'react'

import { HighlightSectionContent, StyledHighlightSection } from './HighlightSection.style'

export type HighlightSectionProps = Readonly<{
  className?: string
  children: React.ReactNode
  title?: string
}>

/**
 * A specialized section with an highlighting background color.
 */
export const HighlightSection = (props: HighlightSectionProps) => {
  const { className, children } = props
  return (
    <StyledHighlightSection className={className}>
      <HighlightSectionContent>{children}</HighlightSectionContent>
    </StyledHighlightSection>
  )
}
