import styled from 'styled-components'

import { color, componentSizes, space } from '../../../_utils/branding'

export const StyledHighlightSection = styled.article`
  padding: ${space.xl};
  background-color: ${color.midnightGreen};
  color: ${color.white};
`
export const HighlightSectionContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${componentSizes.largeSectionWidth};
`
