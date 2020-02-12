import React from 'react'
import BaseSection, { SectionContentSize } from 'layout/section/baseSection'

export interface HighlightSectionProps {
  readonly className?: Classcat.Class
  readonly contentClassName?: Classcat.Class
  readonly children: JSX.Element | string
}

/**
 * A specialized section with an highlighting background color.
 */
const HighlightSection = (props: HighlightSectionProps) => {
  const { className, children, contentClassName } = props
  return (
    <BaseSection
      className={className}
      contentClassName={contentClassName}
      contentSize={SectionContentSize.LARGE}
    >
      {children}
    </BaseSection>
  )
}

export default HighlightSection
