import React from 'react'

import { BusHeroSection, BusHeroSectionProps } from './busHeroSection'
import { HomeHeroSection, HomeHeroSectionProps } from './homeHeroSection'

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
