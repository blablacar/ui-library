import styled from 'styled-components'

import { space } from '../_utils/branding'
import { normalizeHorizontally } from '../layout/layoutNormalizer'

export const StyledReview = styled.blockquote`
  padding-top: ${space.m};
  padding-bottom: ${space.m};
  ${normalizeHorizontally}

  &.kirk-is-review-response .kirk-review-inner {
    padding-left: ${space.xl};
  }

  & .kirk-review-title {
    margin: 0;
  }
`
