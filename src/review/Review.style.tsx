import styled from 'styled-components'

import { space } from '../_utils/branding'

export const StyledReview = styled.blockquote`
  padding-top: ${space.m};
  padding-bottom: ${space.m};
  margin: 0;

  &.kirk-is-review-response .kirk-review-inner {
    padding-left: ${space.xl};
  }

  & .kirk-review-title {
    margin: 0;
  }
`
