import styled from 'styled-components'
import { responsiveBreakpoints, componentSizes, color, space } from '_utils/branding'

import HeroSection from './heroSection'

const StyledHeroSection = styled(HeroSection)`
  & {
    background-color: ${color.defaultBackground};
    position: relative;
    z-index: 1;
    padding: 0;
  }

  & .hero-image {
    position: relative;
    min-height: 136px;
    background-size: cover;
    background-position: center;
    background-image: ${props => `url(${props.heroImageUrl})`};
  }

  & .hero-info {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    max-width: ${componentSizes.largeSectionWidth};
    padding: ${space.xl};
    padding-top: 0;
  }

  & .hero-info-title-wrapper {
    display: flex;
    flex-direction: column;
  }

  & .hero-info-title.kirk-title {
    min-height: auto;
    align-items: flex-end;
    align-self: center;
    display: flex;
    padding-top: ${space.xl};
    padding-bottom: ${space.ms};
    margin: 0;
  }

  & .hero-button {
    margin-top: ${space.xl};
  }

  @media (${responsiveBreakpoints.isMediaLarge}) {
    & {
      height: 75vh;
      margin-bottom: ${space.xl};
      /* Clip overflowing bottom shadow */
      overflow: hidden;
    }

    & .hero-image {
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      background-image: ${props => `url(${props.heroImageUrlLarge});`};
    }

    & .hero-info {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 3;
      width: 100%;
      margin-bottom: ${space.xl};
    }

    & .hero-info * {
      position: relative;
      z-index: 3;
    }

    & .hero-info::after {
      content: '';
      display: block;
      width: 200%;
      height: 150%;
      position: absolute;
      bottom: -${space.xl};
      left: -50%;
      right: -50%;
      z-index: 2;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.4) 72%,
        rgba(0, 0, 0, 0.2) 85%,
        rgba(0, 0, 0, 0) 100%
      );
    }

    /* override ui-library */
    & .hero-info .hero-info-title {
      font-size: 60px;
      color: ${color.textWithBackground};
      padding-top: 8px;
      padding-bottom: 8px;
    }

    /* override ui-library */
    & .hero-info .hero-info-text {
      font-size: 26px;
      color: ${color.textWithBackground};
    }

    & .hero-button {
      margin-bottom: ${space.xl};
    }
  }
`

export { HeroSectionProps } from './heroSection'
export default StyledHeroSection
