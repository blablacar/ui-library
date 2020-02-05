import React from 'react'
import cc from 'classcat'
import BaseSection, { SectionContentSize } from 'layout/section/baseSection'

export interface HighlightSectionProps {
  readonly className?: Classcat.Class
  readonly children: JSX.Element | string
}

/**
 * A specialized section with an highlighting background color.
 */
const HighlightSection = (props: HighlightSectionProps) => {
  const { className, children } = props
  return (
    <BaseSection className={cc(className)} contentSize={SectionContentSize.LARGE}>
      {children}
    </BaseSection>
  )
}

export default HighlightSection
