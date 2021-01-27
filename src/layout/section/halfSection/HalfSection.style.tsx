import styled from 'styled-components'

import { responsiveBreakpoints, space } from '_utils/branding'
import { TextDisplay2 } from 'typography/display2/index'

const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-areas: 'media content';
  /* grid-template-columns: auto-fill; */

  @media (${responsiveBreakpoints.isMediaLarge}) {
    grid-template-areas: 'content media';
    grid-template-columns: repeat(2, 1fr);
  }
`
const Logo = styled.div`
  grid-area: logo;
`
const Content = styled.section`
  grid-area: content;
  grid-column-start: 1;
  grid-row-start: 2;

  @media (${responsiveBreakpoints.isMediaLarge}) {
    align-self: center;
    justify-self: center;
    max-width: 375px; //magical number
    grid-row-start: 1;
  }
`
const Media = styled.aside`
  grid-area: media;
  background-color: gray;
  /* grid-row-start: 1;
  grid-column-start: 2; */
`

const Tagline = styled(TextDisplay2).attrs({
  isInverted: true,
  as: 'h1',
})`
  padding: 15% ${space.xl} 0;
  text-align: center;
`

export const HalfSectionElements = {
  Grid,
  Content,
  Media,
  Tagline,
  Logo,
}
