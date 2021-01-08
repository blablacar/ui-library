import styled from 'styled-components'

import { color, componentSizes, radius, space } from '../../../_utils/branding'
import ItemChoice from '../../../itemChoice'

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

export const HighlightSectionItem = styled(ItemChoice)`
  border-radius: ${radius.m};
  && {
    background-color: ${color.white};
  }
`
