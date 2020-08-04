import styled from 'styled-components'

import { color, componentSizes, responsiveBreakpoints, space } from '../../../_utils/branding'
import { TextDisplay1 } from '../../../typography/display1'
import { HeroSection, HeroSectionProps } from './heroSection'

/*
 * This height calculation is needed to:
 * 1. Center vertically one-line titles in their wrapper
 * 2. Make two(or more)-line  titles start from higher
 */
const largeFontHeightTitle = 60
const largeHeight = largeFontHeightTitle * 2
const smallFontHeightTitle = 32
const smallHeight = smallFontHeightTitle * 2

/*
 * Image height should always be 45% of the screen size
 * Title wrapper should be 1 third of those 45%
 * This is useful to always have the bottom element placed at the same height
 * That way the bottomElement will not be pushed by the Title wrapper content
 */
const imageHeight = 45
const titleWrapperHeight = imageHeight / 3

export const HeroTitleWrapper = styled.div`
  text-align: center;
  min-height: calc(${smallHeight}px + ${titleWrapperHeight}vh);
  @media (${responsiveBreakpoints.isMediaLarge}) {
    min-height: calc(${largeHeight}px + ${titleWrapperHeight}vh);
  }
`

export const HeroTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  min-height: ${smallHeight}px;
  @media (${responsiveBreakpoints.isMediaLarge}) {
    min-height: ${largeHeight}px;
  }
`

export const HeroInfo = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${componentSizes.largeSectionWidth};
  padding: 0 ${space.xl};
  display: flex;
  flex-direction: column;
`

export const HeroContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  @media (${responsiveBreakpoints.isMediaLarge}) {
    align-items: center;
  }
`

export const HeroTextDisplay1 = styled(TextDisplay1)`
  color: ${color.white};
  font-size: ${smallFontHeightTitle}px;
  line-height: ${smallFontHeightTitle}px;

  @media (${responsiveBreakpoints.isMediaLarge}) {
    /* This is a custom font size which is only used for the hero section. */
    font-size: ${largeFontHeightTitle}px;
    line-height: ${largeFontHeightTitle}px;
  }
`

export const StyledHeroSection = styled.div`
  background-color: ${color.white};
  position: relative;
  z-index: 1;
  margin-bottom: ${space.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: ${space.l};
  min-height: ${imageHeight}vh; /* Making sure that the container is at least the same height of the image  */
`

export const HeroImage = styled.div<Pick<HeroSectionProps, 'heroImageUrl'>>`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: ${imageHeight}vh;
  background-size: cover;
  background-position: center;
  background-image: ${props => `url(${props.heroImageUrl})`};

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

export { HeroSection, HeroSectionProps }
export default HeroSection
