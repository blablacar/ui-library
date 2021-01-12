import styled from 'styled-components'

import { color, space } from '../../../_utils/branding'
import { BaseSection } from '../baseSection'

export const StyledHighlightSection = styled(BaseSection)`
  background-color: ${color.green};
  padding-bottom: ${space.xl};

  & .section-content {
    position: relative;
  }
`
