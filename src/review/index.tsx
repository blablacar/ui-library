import styled from 'styled-components'

import { space } from '_utils/branding'
import Review from './Review'

const StyledReview = styled(Review)`
  & {
    padding: ${space.m} 0;
    margin: 0;
  }

  &.kirk-is-review-response {
    padding-left: ${space.xl};
  }

  & .kirk-review-title {
    margin: 0;
    font-size: 1em;
  }
`
export default StyledReview
