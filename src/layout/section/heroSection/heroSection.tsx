import React from 'react'

import { Button, ButtonProps } from '../../../button'
import { TextDisplay1 } from '../../../typography/display1'
import { TextTitle } from '../../../typography/title'

export type HeroSectionProps = {
  className?: string
  heroImageUrl?: string
  heroImageUrlLarge: string
  heroText?: string
  heroDescription?: string
  buttonText?: string
  buttonHref?: ButtonProps['href']
  bottomElement?: React.ReactElement
}

export function HeroSection({
  className,
  heroText,
  heroDescription,
  buttonText,
  buttonHref,
  bottomElement,
}: HeroSectionProps) {
  return (
    <div className={className}>
      <div className="hero-image" aria-hidden="true" />

      <div className="hero-info">
        <div className="hero-info-title-wrapper">
          <h1 className="hero-info-title">
            <TextDisplay1 className="hero-info-title--display1">{heroText}</TextDisplay1>
          </h1>

          {heroDescription && (
            <p className="hero-info-text">
              <TextTitle className="hero-info-text-title">{heroDescription}</TextTitle>
            </p>
          )}
        </div>

        <div className="hero-content">
          {bottomElement ?? <Button href={buttonHref}>{buttonText}</Button>}
        </div>
      </div>
    </div>
  )
}
