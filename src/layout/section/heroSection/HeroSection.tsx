import React from 'react'

import { ClassicHeroSection, ClassicHeroSectionProps } from './ClassicHeroSection'
import { IllustrationHeroSection, IllustrationHeroSectionProps } from './IllustrationHeroSection'

export type HeroSectionProps = IllustrationHeroSectionProps | ClassicHeroSectionProps

function isIllustrationHeroSectionProps(
  props: HeroSectionProps,
): props is IllustrationHeroSectionProps {
  return (props as IllustrationHeroSectionProps).heroImageUrlLarge != null
}

export function HeroSection(props: HeroSectionProps) {
  if (isIllustrationHeroSectionProps(props)) {
    return <IllustrationHeroSection {...props} />
  }

  return <ClassicHeroSection {...props} />
}

export { ClassicHeroSectionProps, IllustrationHeroSectionProps }
