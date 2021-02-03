import React from 'react'

import { HeroSection, HeroSectionProps } from '../heroSection'
import { SEALandingLayoutElements } from './SEALandingLayout.style'

export type SEALandingLayoutProps = HeroSectionProps &
  Readonly<{
    children: React.ReactNode
  }>

export const SEALandingLayout = ({
  children,
  heroText,
  heroImageUrlLarge,
  heroImageUrlSmall,
}: SEALandingLayoutProps) => (
  <SEALandingLayoutElements.Grid>
    <SEALandingLayoutElements.Body>{children}</SEALandingLayoutElements.Body>
    <SEALandingLayoutElements.Figure>
      <HeroSection
        heroText={heroText}
        heroImageUrlSmall={heroImageUrlSmall}
        heroImageUrlLarge={heroImageUrlLarge}
        bottomElement={null}
      />
    </SEALandingLayoutElements.Figure>
  </SEALandingLayoutElements.Grid>
)
