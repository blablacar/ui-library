import React from 'react'
import BaseSection, { SectionContentSize } from 'layout/section/baseSection'
import SubHeader from 'subHeader'

export interface HighlightSectionProps {
  readonly className?: Classcat.Class
  readonly contentClassName?: Classcat.Class
  readonly children: React.ReactNode
  readonly title?: string
}

/**
 * A specialized section with an highlighting background color.
 */
const HighlightSection = (props: HighlightSectionProps) => {
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

export default HighlightSection
