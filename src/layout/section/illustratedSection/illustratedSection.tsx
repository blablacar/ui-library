import React from 'react'
import BaseSection, { SectionContentSize } from 'layout/section/baseSection'

export interface IllustratedSectionProps {
  readonly children: React.ReactNode
  readonly className?: Classcat.Class
  readonly illustrationUrl: string
  readonly illustrationAlt?: string
}

/**
 * A specialized section which show some content with an illustration.
 */
const IllustratedSection: React.SFC<IllustratedSectionProps> = (props: IllustratedSectionProps) => {
  const { className, illustrationUrl, illustrationAlt = '' } = props
  return (
    <BaseSection tagName="article" className={className} contentSize={SectionContentSize.LARGE}>
      <div className="kirk-illustratedSection-illustration">
        <img src={illustrationUrl} alt={illustrationAlt} />
      </div>
      <div className="kirk-illustratedSection-content">{props.children}</div>
    </BaseSection>
  )
}

export default IllustratedSection
