import styled from 'styled-components'

import { space } from '../_utils/branding'

export const StyledTripCardSample = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;

  .kirk-tripCardSample-price {
    margin: 0 0 ${space.xl} ${space.m};
    text-align: right;
  }

  .kirk-tripCardSample-price span {
    display: block;
  }
`
