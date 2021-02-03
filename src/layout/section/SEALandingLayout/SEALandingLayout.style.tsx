import styled from 'styled-components'

import { color, responsiveBreakpoints } from '../../../_utils/branding'

const Grid = styled.div`
  display: grid;
  height: 100vh; //@todo: strech
  grid-template-areas:
    'figure'
    'body';
  grid-template-rows: minmax(33vh, 33vh) auto;
  background-color: ${color.white};

  @media (${responsiveBreakpoints.isMediaLarge}) {
    grid-template-areas: 'body figure';
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
`
const Body = styled.div`
  grid-area: body;

  @media (${responsiveBreakpoints.isMediaLarge}) {
    align-self: center;
    justify-self: center;
    max-width: 23.4375rem; //magical number: iPhone6 width
    grid-row-start: 1;
  }
`
const Figure = styled.figure`
  grid-area: figure;
  grid-column-start: 1;
  background-color: ${color.blue};
  overflow: hidden;

  @media (${responsiveBreakpoints.isMediaLarge}) {
    grid-row-start: 1;
    grid-column-start: 2;
  }
`

export const SEALandingLayoutElements = {
  Grid,
  Body,
  Figure,
}
