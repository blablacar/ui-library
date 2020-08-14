import React from 'react'
import cc from 'classcat'
import styled from 'styled-components'

import { color, space } from '../_utils/branding'
import { normalizeHorizontally, NormalizeProps } from '../layout/layoutNormalizer'

export type DividerProps = NormalizeProps &
  Readonly<{
    className?: string
  }>

const StyledDivider = styled.div`
  /* HorizontalNormalization */
  & {
    ${normalizeHorizontally}
  }

  & {
    /* Using padding to avoid collapsing margins with above and below components */
    padding-top: ${space.m};
    padding-bottom: ${space.m};
  }

  & > hr {
    border: none;
    background-color: ${color.lightGray};
    height: 1px;
    margin: 0;
  }
`

export const Divider = ({ className }: DividerProps) => (
  <StyledDivider className={cc(className)} aria-hidden="true">
    <hr />
  </StyledDivider>
)
