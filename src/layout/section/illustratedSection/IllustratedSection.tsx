import React from 'react'

import { BaseSection, SectionContentSize } from '../../../layout/section/baseSection'
import { StyledIllustratedSection } from './IllustratedSection.style'

export type IllustratedSectionProps = Readonly<{
  children: React.ReactNode
  className?: string
  illustration: JSX.Element
}>

/**
 * A specialized section which show some content with an illustration.
 */
export const IllustratedSection: React.SFC<IllustratedSectionProps> = ({
  children,
  className = '',
  illustration,
}: IllustratedSectionProps) => (
  <StyledIllustratedSection>
    <BaseSection
      tagName="article"
      className={className}
      contentSize={SectionContentSize.LARGE}
      noHorizontalSpacing
    >
      <div className="kirk-illustratedSection-illustration">{illustration}</div>
      <div className="kirk-illustratedSection-content">{children}</div>
    </BaseSection>
  </StyledIllustratedSection>
)
