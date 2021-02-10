import React from 'react'

import { Lines } from '../Itinerary'
import { StyledLine, StyledLineWrapper, StyledBullet } from './Line.style'

export type LineProps = Readonly<{
  line: Lines
  bullet?: JSX.Element
}>

export const Line = ({ line, bullet }: LineProps) => (
  <StyledLineWrapper aria-hidden="true" line={line}>
    <StyledLine line={line}/>
    {line === Lines.HIDDEN_STOPS && <StyledLine line={line}/>}
    {bullet && <StyledBullet line={line}>{bullet}</StyledBullet>}
  </StyledLineWrapper>
)
