import styled from 'styled-components'

import { color, componentSizes, font, responsiveBreakpoints, space } from '../../../_utils/branding'
import { TextDisplay1 } from '../../../typography/display1'

// Common content width with used on the app: `componentSizes.searchOverlayWidth`
const CONTENT_WIDTH = '375px'

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'media'
    'body';
  grid-template-rows: 33vh auto;
  background-color: ${color.white};

  @media (${responsiveBreakpoints.isMediaLarge}) {
    // @note: Avoid scroll by taking into account Header (topBar)
    height: calc(100vh - ${componentSizes.headerHeight.large});
    grid-template-areas: 'body media';
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
`
const Body = styled.div`
  grid-area: body;
  align-self: center;
  justify-self: center;
  max-width: ${CONTENT_WIDTH};
  margin-top: ${space.xl};

  @media (${responsiveBreakpoints.isMediaLarge}) {
    grid-row-start: 1;
    margin-top: 0;
  }
`
const Media = styled.div<{ small: string; large: string }>`
  grid-area: media;
  grid-column-start: 1;
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

const Heading = styled(TextDisplay1).attrs({ isInverted: true })`
  padding: ${space.m} ${space.xl};
  text-align: center;

  @media (${responsiveBreakpoints.isMediaLarge}) {
    padding: ${space.xxl} ${space.xl};

    // Display 2
    font-size: ${font.xxl.size};
    line-height: ${font.xxl.lineHeight};
  }
`

export const SeaPageElements = {
  Wrapper,
  Body,
  Media,
  Heading,
}
