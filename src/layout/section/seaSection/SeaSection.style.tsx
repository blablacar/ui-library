import styled from 'styled-components'

import { color, componentSizes, font, responsiveBreakpoints, space } from '../../../_utils/branding'
import { TextSubHeader } from '../../../typography/subHeader'

// Common content width with used on the app
const CONTENT_WIDTH = componentSizes.searchOverlayWidth

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'media'
    'body';
  grid-template-rows: minmax(33vh, 33vh) auto;
  background-color: ${color.white};

  @media (${responsiveBreakpoints.isMediaLarge}) {
    height: 100vh; //@todo: strech to parent
    grid-template-areas: 'body media';
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
`
const Body = styled.div`
  grid-area: body;

  @media (${responsiveBreakpoints.isMediaLarge}) {
    align-self: center;
    justify-self: center;
    max-width: ${CONTENT_WIDTH};
    grid-row-start: 1;
  }
`
const Media = styled.div<{ small: string; large: string }>`
  grid-area: media;
  grid-column-start: 1;
  background-color: ${color.blue};
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-image: ${props => `url(${props.small})`};

  @media (${responsiveBreakpoints.isMediaLarge}) {
    grid-row-start: 1;
    grid-column-start: 2;
    background-image: ${props => `url(${props.large})`};
  }
`

const Heading = styled(TextSubHeader).attrs({ isInverted: true })`
  padding: ${space.xl} ${space.xl};
  text-align: center;

  @media (${responsiveBreakpoints.isMediaLarge}) {
    padding: 15% ${space.xl};

    // Display 2
    font-size: ${font.xxl.size};
    line-height: ${font.xxl.lineHeight};
  }
`

export const SeaSectionElements = {
  Wrapper,
  Body,
  Media,
  Heading,
}
