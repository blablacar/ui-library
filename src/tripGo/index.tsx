import React from 'react'
import styled from 'styled-components'
import { space } from '../_utils/branding'
import { ArrowIcon } from '../icon'

const StyledTripGo = styled.span`
  display: flex;
  align-items: center;
  font-size: 1em;
  color: inherit;
`

const StyledArrowIcon = styled(ArrowIcon)`
  font-size: 1em;
  height: 1em;
  display: inline-block;
  margin: 0 ${space.s};
  color: currentColor;
  fill: currentColor;
  stroke: currentColor;
`

export interface TripGoProps {
  readonly from: string
  readonly to?: string
}

export const TripGo = ({ from, to, ...props }: TripGoProps) => (
  <StyledTripGo {...props}>
    {from && <span>{from}</span>}
    {from && to && <StyledArrowIcon right />}
    {to && <span>{to}</span>}
  </StyledTripGo>
)
