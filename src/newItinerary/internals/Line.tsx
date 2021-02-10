import React from 'react'

import { BulletTypes } from '../../bullet'
import { Lines } from '../Itinerary'
import { StyledLine, StyledLineWrapper, StyledBullet } from './Line.style'

export enum LinePlacement {
  TOP = 'top',
  BOTTOM = 'bottom',
}

export type LineProps = Readonly<{
  line: Lines
  bullet?: JSX.Element
  placement?: LinePlacement
}>

export const Line = ({ line, bullet }: LineProps) => (
  <StyledLineWrapper aria-hidden="true">
    <StyledBullet>{bullet}</StyledBullet>
    <StyledLine line={line} />
  </StyledLineWrapper>
)
