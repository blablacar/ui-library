import React from 'react'
import styled from 'styled-components'

import { ArrowIcon } from '../../icon'
import { space } from '../branding'

const StyledRideAxis = styled.span`
  display: inline-flex;
  align-items: self-start;

  > span {
    flex: 1;
  }
`

const StyledArrowIcon = styled(ArrowIcon)`
  & {
    display: inline-block;
    margin: 0 ${space.m};
    height: 1em;
    width: 1em;
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
