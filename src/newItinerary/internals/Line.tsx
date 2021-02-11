import React, { cloneElement } from 'react'

import { Bullet } from '../../bullet'
import { Lines } from '../Itinerary'
import { StyledBullet, StyledLine, StyledLineWrapper } from './Line.style'

export type LineProps = Readonly<{
  line: Lines
  bullet?: JSX.Element
}>

export const Line = ({ line, bullet }: LineProps) => {
  // For icons, let's force the size to 16px.
  const icon =
    bullet && bullet.type !== Bullet ? cloneElement(bullet, { ...bullet.props, size: 16 }) : bullet

  return (
    <StyledLineWrapper aria-hidden="true" line={line}>
      <StyledLine line={line} />
      {line === Lines.HIDDEN_STOPS && <StyledLine line={line} />}
      {icon && <StyledBullet>{icon}</StyledBullet>}
    </StyledLineWrapper>
  )
}
