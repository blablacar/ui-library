import styled from 'styled-components'

import { color, space } from '../_utils/branding'
import Rating from './Rating'

const StyledRating = styled(Rating)`
  & {
    display: flex;
    align-items: center;
  }

  & span {
    color: ${color.lightMidnightGreen};
    margin-left: ${space.s};
  }
`

export { RatingProps } from './Rating'
export default StyledRating
