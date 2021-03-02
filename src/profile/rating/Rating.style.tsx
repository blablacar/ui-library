import styled from 'styled-components'

import { color, space } from '../../_utils/branding'

export const StyledRating = styled.div`
  display: flex;
  align-items: center;

  & span {
    color: ${color.lightMidnightGreen};
    margin-left: ${space.s};
  }
`
