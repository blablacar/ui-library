import React, { PureComponent } from 'react'
import Button from 'button'
import Title from 'title'
import Text, { TextTagType } from 'text'
import cc from 'classcat'

export interface HeroSectionProps {
  readonly className?: Classcat.Class
  readonly heroImageUrl: string
  readonly heroImageUrlLarge: string
  readonly heroText?: string
  readonly heroDescription?: string
  readonly buttonText?: string
  readonly buttonHref?: string | JSX.Element
}

class HeroSection extends PureComponent<HeroSectionProps> {
  render() {
    const { className, heroText, heroDescription, buttonText, buttonHref } = this.props
    return (
      <div className={cc(className)}>
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-info wrapper wrapper--large">
          <div className="hero-info-title-wrapper">
            <Title className="hero-info-title">{heroText}</Title>
            {heroDescription && (
              <Text tag={TextTagType.PARAGRAPH} className="hero-info-text">
                {heroDescription}
              </Text>
            )}
          </div>
          <Button className="hero-button" href={buttonHref}>
            {buttonText}
          </Button>
        </div>
      </div>
    )
  }
}

export default HeroSection
