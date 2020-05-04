import styled from 'styled-components'

import { color, font, responsiveBreakpoints, space } from '_utils/branding'

import HighlightSection from './highlightSection'

const StyledHighlightSection = styled(HighlightSection)`
  & {
    background-color: ${color.green};
    padding-bottom: ${space.xl};
  }

  & .section-content {
    position: relative;
  }

  & .kirk-subheader {
    color: ${color.white};
    font-size: ${font.xl.size};
    padding-top: ${space.xl};
    padding-bottom: ${space.xl};
  }

  @media (${responsiveBreakpoints.isMediaSmall}) {
    & .kirk-subheader {
      text-align: center;
    }
  }
`

export default StyledHighlightSection
