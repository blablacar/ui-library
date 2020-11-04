import styled from 'styled-components'

import { space } from '../_utils/branding'

export const StyledProximity = styled.div`
  display: inline-block;
  line-height: 0;

  svg {
    margin-top: ${space.s};
  }

  svg + svg {
    margin-left: ${space.s};
  }
`
