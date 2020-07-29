import styled from 'styled-components'

import { space } from '../_utils/branding'

export const StyledReview = styled.blockquote`
  padding: ${space.m} 0;
  margin: 0;

  &.kirk-is-review-response {
    padding-left: ${space.xl};
  }

  & .kirk-review-title {
    margin: 0;
  }
`
