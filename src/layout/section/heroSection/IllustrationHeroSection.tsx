import React from 'react'
import styled from 'styled-components'

import {
  color,
  componentSizes,
  fontWeight,
  responsiveBreakpoints,
  space,
} from '../../../_utils/branding'

// The image should always be 45% of the screen size.
const IMAGE_HEIGHT = 45

// 15% of the image is for spacing above the text.
const TITLE_MARGIN_TOP = IMAGE_HEIGHT * 0.15

// 20% of the image is for the title.
// It is allowed to overflow vertically if the text wraps on multiple lines.
// It wont impact the rest of the layout, it will only spread over the top
// margin and the cleared out space.
const TITLE_HEIGHT = IMAGE_HEIGHT * 0.2

// 35% of the image should be cleared out for the user to see it.
const IMAGE_CLEARED_OUT_PART_HEIGHT = IMAGE_HEIGHT * 0.35

// The 30% remaining of the image is for the bottom element.
// It is allowed to overflow by the bottom.
const BOTTOM_CONTENT_HEIGHT = IMAGE_HEIGHT * 0.3

const StyledIllustrationHeroSection = styled.div`
  position: relative;
  z-index: 1;
  margin-bottom: ${space.xl};
  width: 100%;
  /* Making sure that the container is at least the same height of the image. */
  min-height: ${IMAGE_HEIGHT}vh;
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`

type HeroImageProps = {
  heroImageUrlSmall: string
  heroImageUrlLarge: string
}

const HeroImage = styled.div<HeroImageProps>`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: ${IMAGE_HEIGHT}vh;
  background-size: cover;
  background-position: center;
  background-image: ${props => `url(${props.heroImageUrlSmall})`};

  @media (${responsiveBreakpoints.isMediaLarge}) {
    background-image: ${props => `url(${props.heroImageUrlLarge})`};
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 30%, rgba(0, 0, 0, 0) 100%);
  }
`

const HeroContent = styled.div`
  width: 100%;
  max-width: ${componentSizes.largeSectionWidth};
  padding: 0 ${space.xl};
`

// These are custom font sizes which are only used for the hero section.
const SMALL_FONT_HEIGHT_TITLE = 32
const LARGE_FONT_HEIGHT_TITLE = 60

const HeroTitle = styled.h1`
  margin: ${TITLE_MARGIN_TOP}vh 0 0;
  width: 100%;
  height: ${TITLE_HEIGHT}vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${color.white};
  font-size: ${SMALL_FONT_HEIGHT_TITLE}px;
  line-height: ${SMALL_FONT_HEIGHT_TITLE}px;
  font-weight: ${fontWeight.medium};

  @media (${responsiveBreakpoints.isMediaLarge}) {
    font-size: ${LARGE_FONT_HEIGHT_TITLE}px;
    line-height: ${LARGE_FONT_HEIGHT_TITLE}px;
  }
`

const HeroBottomElement = styled.div`
  margin-top: ${IMAGE_CLEARED_OUT_PART_HEIGHT}vh;
  width: 100%;
  min-height: ${BOTTOM_CONTENT_HEIGHT}vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  @media (${responsiveBreakpoints.isMediaLarge}) {
    align-items: center;
  }
`

export type IllustrationHeroSectionProps = HeroImageProps & {
  heroText?: string
  bottomElement: React.ReactElement
}

export function IllustrationHeroSection({
  heroText,
  bottomElement,
  heroImageUrlSmall,
  heroImageUrlLarge,
}: IllustrationHeroSectionProps) {
  return (
    <StyledIllustrationHeroSection>
      <HeroImage heroImageUrlSmall={heroImageUrlSmall} heroImageUrlLarge={heroImageUrlLarge} />

      <HeroContent>
        <HeroTitle>{heroText}</HeroTitle>

        <HeroBottomElement>{bottomElement}</HeroBottomElement>
      </HeroContent>
    </StyledIllustrationHeroSection>
  )
}
