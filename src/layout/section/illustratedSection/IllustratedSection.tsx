import React from 'react'

import { Avatar } from '../../../avatar'
import { BaseSection, SectionContentSize } from '../../../layout/section/baseSection'
import { StyledIllustratedSection } from './IllustratedSection.style'

export type IllustratedSectionProps = Readonly<{
  children: React.ReactNode
  className?: string
  illustrationUrl: string
  illustrationAlt?: string
  isAvatar?: boolean
}>

/**
 * A specialized section which show some content with an illustration.
 */
export const IllustratedSection: React.SFC<IllustratedSectionProps> = (
  props: IllustratedSectionProps,
) => {
  const { className = '', illustrationUrl, illustrationAlt = '', isAvatar = false } = props
  const illu: JSX.Element = !isAvatar ? (
    <img src={illustrationUrl} alt={illustrationAlt} />
  ) : (
    <Avatar image={illustrationUrl} alt={illustrationAlt} isLarge />
  )
  return (
    <StyledIllustratedSection>
      <BaseSection
        tagName="article"
        className={className}
        contentSize={SectionContentSize.LARGE}
        noHorizontalSpacing
      >
        <div className="kirk-illustratedSection-illustration">{illu}</div>
        <div className="kirk-illustratedSection-content">{props.children}</div>
      </BaseSection>
    </StyledIllustratedSection>
  )
}
