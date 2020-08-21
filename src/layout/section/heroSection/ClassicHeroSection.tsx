import React from 'react'
import styled from 'styled-components'

import { color, componentSizes, font, responsiveBreakpoints, space } from '../../../_utils/branding'
import { TextDisplay1 } from '../../../typography/display1'
import { TextTitle } from '../../../typography/title'

export type ClassicHeroSectionProps = {
  className?: string
  heroImageUrl: string
  heroText?: string
  heroDescription?: string
  bottomElement?: React.ReactElement
}

function ClassicHeroSection({
  className,
  heroText,
  heroDescription,
  bottomElement,
}: ClassicHeroSectionProps) {
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

        <div className="hero-content">{bottomElement}</div>
      </div>
    </div>
  )
}

const StyledClassicHeroSection = styled(ClassicHeroSection)`
  & {
    background-color: ${color.white};
    position: relative;
    z-index: 1;
    height: 80vh;
    margin-bottom: ${space.xl};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }

  & .hero-image {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 80%;
    background-size: cover;
    background-position: center;
    background-image: ${props => `url(${props.heroImageUrl})`};

    /* Hide the shadow. */
    overflow: hidden;
  }

  & .hero-image::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80%;
    display: block;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4) 72%,
      rgba(0, 0, 0, 0.2) 85%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  & .hero-info {
    width: 100%;
    max-width: ${componentSizes.largeSectionWidth};
    padding: 0 ${space.xl};
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .hero-info-title-wrapper {
    text-align: center;
  }

  & .hero-info-title {
    margin: 0;
    padding-top: ${space.m};
    padding-bottom: ${space.m};
  }

  & .hero-info-title--display1 {
    color: ${color.white};
  }

  & .hero-info-text {
    margin: 0;
  }

  & .hero-info-text-title {
    color: ${color.white};
  }

  & .hero-content {
    width: 100%;
    margin-top: ${space.xl};
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  @media (${responsiveBreakpoints.isMediaLarge}) {
    & {
      height: 75vh;
      justify-content: center;
    }

    & .hero-image {
      height: 100%;
    }

    & .hero-image::after {
      height: 75%;
    }

    & .hero-info {
      /* This value seams to work in most cases. */
      padding-top: 120px;
    }

    & .hero-info-title--display1 {
      /* This is a custom font size which is only used for the hero section. */
      font-size: 60px;
      line-height: 60px;
    }

    & .hero-info-text-title {
      font-size: ${font.l.size};
      line-height: ${font.l.lineHeight};
    }

    & .hero-content {
      align-items: center;
    }
  }
`

export { StyledClassicHeroSection as ClassicHeroSection }
