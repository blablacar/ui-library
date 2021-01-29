import React from 'react'

import { HeroSection, HeroSectionProps } from '../heroSection'
import { LandingGridSectionElements } from './LandingGridSection.style'

export type LandingGridSectionProps = HeroSectionProps &
  Readonly<{
    children: React.ReactNode
  }>

export const LandingGridSection = ({
  children,
  heroText,
  heroImageUrlLarge,
  heroImageUrlSmall,
}: LandingGridSectionProps) => (
  <LandingGridSectionElements.Grid>
    <LandingGridSectionElements.Body>{children}</LandingGridSectionElements.Body>
    <LandingGridSectionElements.Figure>
      <HeroSection
        heroText={heroText}
        heroImageUrlSmall={heroImageUrlSmall}
        heroImageUrlLarge={heroImageUrlLarge}
        bottomElement={null}
      />
    </LandingGridSectionElements.Figure>
  </LandingGridSectionElements.Grid>
)
