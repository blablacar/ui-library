import React from 'react'

import { StyledArrowIcon, StyledRideAxis } from './RideAxis.style'

export type RideAxisProps = Readonly<{
  from?: string
  to?: string
}>

export const RideAxis = ({ from, to, ...props }: RideAxisProps) => (
  <StyledRideAxis {...props}>
    {from && <span>{from}</span>}
    {from && to && <StyledArrowIcon right />}
    {to && <span>{to}</span>}
  </StyledRideAxis>
)
