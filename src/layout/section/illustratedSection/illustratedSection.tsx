import React from 'react'

import Avatar from 'avatar'
import BaseSection, { SectionContentSize } from 'layout/section/baseSection'

export interface IllustratedSectionProps {
  readonly children: React.ReactNode
  readonly className?: string
  readonly illustrationUrl: string
  readonly illustrationAlt?: string
  readonly isAvatar?: boolean
}

/**
 * A specialized section which show some content with an illustration.
 */
const IllustratedSection: React.SFC<IllustratedSectionProps> = (props: IllustratedSectionProps) => {
  const { className = '', illustrationUrl, illustrationAlt = '', isAvatar = false } = props
  const illu: JSX.Element = !isAvatar ? (
    <img src={illustrationUrl} alt={illustrationAlt} />
  ) : (
    <Avatar image={illustrationUrl} alt={illustrationAlt} isLarge />
  )
  return (
    <BaseSection tagName="article" className={className} contentSize={SectionContentSize.LARGE}>
      <div className="kirk-illustratedSection-illustration">{illu}</div>
      <div className="kirk-illustratedSection-content">{props.children}</div>
    </BaseSection>
  )
}

export default IllustratedSection
