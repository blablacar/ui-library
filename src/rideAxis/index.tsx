import React from 'react'
import styled from 'styled-components'

import { space } from '../_utils/branding'
import { ArrowIcon } from '../icon'

const StyledRideAxis = styled.span`
  display: flex;
  align-items: center;
  font-size: 1em;
  color: inherit;
`

const StyledArrowIcon = styled(ArrowIcon)`
  & {
    display: inline-block;
    margin: 0 ${space.s};
    height: 1em;
    stroke: currentColor;
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
