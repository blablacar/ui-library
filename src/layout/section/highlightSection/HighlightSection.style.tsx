import styled from 'styled-components'

import { color, componentSizes, space } from '../../../_utils/branding'

const StyledHighlightSection = styled.section`
  padding: ${space.xl};
  background-color: ${color.midnightGreen};
  color: ${color.white};
`
const HighlightSectionContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${componentSizes.largeSectionWidth};
`
export { StyledHighlightSection, HighlightSectionContent }
