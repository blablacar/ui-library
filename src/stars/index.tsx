import styled from 'styled-components'

import { Stars } from './Stars'

const StyledStars = styled(Stars)`
  & .star {
    display: inline-block;
    margin-right: 2px;
  }
`
export { StarsProps } from './Stars'
export { StyledStars as Stars }
export default StyledStars
