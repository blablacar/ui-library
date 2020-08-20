import React from 'react'

import { BusHeroSection, BusHeroSectionProps } from './BusHeroSection'
import { HomeHeroSection, HomeHeroSectionProps } from './HomeHeroSection'

export type HeroSectionProps = HomeHeroSectionProps | BusHeroSectionProps

function isHomeHeroSectionProps(props: HeroSectionProps): props is HomeHeroSectionProps {
  return (props as HomeHeroSectionProps).heroImageUrlLarge != null
}

export function HeroSection(props: HeroSectionProps) {
  if (isHomeHeroSectionProps(props)) {
    return <HomeHeroSection {...props} />
  }

  return <BusHeroSection {...props} />
}

export { BusHeroSectionProps, HomeHeroSectionProps }
