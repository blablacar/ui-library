import React from 'react'

import {
  HeroContent,
  HeroImage,
  HeroInfo,
  HeroTextDisplay1,
  HeroTitle,
  HeroTitleWrapper,
  StyledHeroSection,
} from '.'

export type HeroSectionProps = {
  heroImageUrl: string
  heroText?: string
  bottomElement: React.ReactElement
}

export function HeroSection({ heroText, bottomElement, heroImageUrl }: HeroSectionProps) {
  return (
    <StyledHeroSection>
      <HeroImage heroImageUrl={heroImageUrl} />
      <HeroInfo>
        <HeroTitleWrapper>
          <HeroTitle>
            <HeroTextDisplay1>{heroText}</HeroTextDisplay1>
          </HeroTitle>
        </HeroTitleWrapper>

        <HeroContent>{bottomElement}</HeroContent>
      </HeroInfo>
    </StyledHeroSection>
  )
}
