import React from 'react'
import styled from 'styled-components'

import { ArrowIcon } from '../../icon'
import { space } from '../branding'

const StyledRideAxis = styled.span``

const StyledArrowIcon = styled(ArrowIcon)`
  & {
    display: inline-block;
    /* hack: optical alignment since the icon isn't centered on the viewport */
    padding: 0.1em 0 0;
    margin: 0 ${space.m};
    height: 0.9em;
    width: 0.9em;
    flex-shrink: 0;
    flex-grow: 0;
  }
`

export interface RideAxisProps {
  readonly from?: string
  readonly to?: string
}

export const RideAxis = ({ from, to, ...props }: RideAxisProps) => (
  <StyledRideAxis {...props}>
    {from && <span>{from}</span>}
    {from && to && <StyledArrowIcon right />}
    {to && <span>{to}</span>}
  </StyledRideAxis>
)
