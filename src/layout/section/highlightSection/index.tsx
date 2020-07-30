import styled from 'styled-components'

import { color, font, responsiveBreakpoints, space } from '../../../_utils/branding'
import { SubHeader } from '../../../subHeader'
import { HighlightSection } from './highlightSection'

const StyledHighlightSection = styled(HighlightSection)`
  & {
    background-color: ${color.green};
    padding-bottom: ${space.xl};
  }

  & .section-content {
    position: relative;
  }
`

export const StyledHighlightSectionSubHeader = styled(SubHeader)`
  color: ${color.white};
  font-size: ${font.xl.size};
  padding-top: ${space.xl};
  padding-bottom: ${space.xl};

  @media (${responsiveBreakpoints.isMediaSmall}) {
    text-align: center;
  }
`

export { StyledHighlightSection as HighlightSection }
export default StyledHighlightSection
