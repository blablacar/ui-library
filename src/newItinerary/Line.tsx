import React from 'react'

import { Bullet, BulletTypes } from '../bullet'
import { Lines } from './Itinerary'
import { StyledLine, StyledLineWrapper } from './Line.style'

export enum LinePlacement {
  TOP = 'top',
  BOTTOM = 'bottom',
}

export type LineProps = Readonly<{
  line: Lines
  bulletType?: BulletTypes
  bullet?: JSX.Element
  placement?: LinePlacement
}>

export const Line = ({ line, bulletType, bullet }: LineProps) => (
  <StyledLineWrapper aria-hidden="true">
    {bullet || <Bullet type={bulletType} />}
    <StyledLine line={line} />
  </StyledLineWrapper>
)
