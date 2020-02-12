import styled from 'styled-components'
import { color, space, font, responsiveBreakpoints } from '_utils/branding'

import HighlightSection from './highlightSection'

const StyledHighlightSection = styled(HighlightSection)`
  & {
    background-color: ${color.success};
    padding-bottom: ${space.xl};
  }

  & .section-content {
    position: relative;
  }

  & .kirk-subheader {
    color: ${color.textWithBackground};
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
