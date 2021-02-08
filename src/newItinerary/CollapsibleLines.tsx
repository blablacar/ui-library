import React from 'react'

import { Bullet, BulletTypes } from '../bullet'
import { Lines } from './Itinerary'
import { LinePlacement } from './Line'
import { StyledLine, StyledLineWrapper } from './Line.style'

export type LineProps = Readonly<{
  line: Lines
  bulletType?: BulletTypes
  bullet?: JSX.Element
}>

export const CollapsibleLines = ({ line, bulletType, bullet }: LineProps) => (
  <StyledLineWrapper aria-hidden="true">
    <StyledLine line={line} placement={LinePlacement.TOP} />
    {bullet || <Bullet type={bulletType} />}
    <StyledLine line={line} placement={LinePlacement.BOTTOM} />
  </StyledLineWrapper>
)
