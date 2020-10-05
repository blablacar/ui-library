import React from 'react'
import styled from 'styled-components'

import { Divider } from '../../_internals/divider'
import { normalizeHorizontally } from '../../layout/layoutNormalizer'

const StyledDivider = styled(Divider)`
  ${normalizeHorizontally}
`

export const ContentDivider = () => (
  <StyledDivider>
    <hr />
  </StyledDivider>
)
