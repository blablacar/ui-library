import styled, { css } from 'styled-components'

import { color, componentSizes, font, responsiveBreakpoints, space } from '../../../_utils/branding'

import HeroSection, { HeroSectionProps } from './heroSection'

// Remove these deprecated styles once all the button content parts have been removed.
const DEPRECATED_STYLES = css`
  & {
    margin-bottom: 0;
    height: initial;
  }

  & .hero-image {
    position: static;
    height: 136px;
    background-image: ${(props: HeroSectionProps) => `url(${props.heroImageUrl})`};
  }

  & .hero-image::after {
    content: none;
  }

  & .hero-info {
    padding-top: ${space.xl};
  }

  & .hero-info-title--display1 {
    color: ${color.midnightGreen};
  }

  & .hero-info-text-title {
    color: ${color.lightMidnightGreen};
    font-size: ${font.base.size};
    line-height: ${font.base.lineHeight};
  }

  & .hero-content {
    align-items: center;
  }
`

const DEPRECATED_LARGE_MEDIA_STYLES = css`
  & {
    margin-bottom: ${space.xl};
    justify-content: flex-end;
  }

  & .hero-image {
    position: absolute;
    background-image: ${(props: HeroSectionProps) => `url(${props.heroImageUrlLarge})`};
  }

  & .hero-image::after {
    content: '';
  }

  & .hero-info {
    padding-top: 0;
    padding-bottom: ${space.xl};
    margin-bottom: ${space.xl};
  }

  & .hero-info-title--display1 {
    color: ${color.white};
  }

  & .hero-info-text-title {
    color: ${color.white};
  }
`

const StyledHeroSection = styled(HeroSection)`
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
    background-image: ${props => `url(${props.heroImageUrlLarge})`};

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

  ${props => (props.bottomElement == null ? DEPRECATED_STYLES : null)}

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

    ${props => (props.bottomElement == null ? DEPRECATED_LARGE_MEDIA_STYLES : null)}
  }
`

export { HeroSectionProps }
export default StyledHeroSection
