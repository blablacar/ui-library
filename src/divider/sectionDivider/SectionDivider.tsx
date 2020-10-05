import React from 'react'
import styled from 'styled-components'

import { Divider } from '../../_internals/divider'

const StyledDivider = styled(Divider)`
  > hr {
    height: 8px;
  }
`

export const SectionDivider = () => (
  <StyledDivider>
    <hr />
  </StyledDivider>
)
