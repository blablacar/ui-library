import React from 'react'
import cc from 'classcat'
import styled from 'styled-components'

import { color, space } from '../_utils/branding'

export interface DividerProps {
  readonly className?: string
}

const StyledDivider = styled.div`
  & {
    // Height is used instead of margins to prevent collapsing margin issues with other
    // margin-based components.
    height: calc(2 * ${space.m});
    position: relative;
  }

  &:after {
    position: absolute;
    top: ${space.m};
    content: ' ';
    border-top: solid ${color.lightGray} 1px;
    width: 100%;
  }
`

export const Divider = ({ className }: DividerProps) => (
  <StyledDivider className={cc(className)} aria-hidden="true" />
)
