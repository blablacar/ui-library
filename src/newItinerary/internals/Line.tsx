import React, { cloneElement } from 'react'

import { Bullet } from '../../bullet'
import { Lines } from '../Lines'
import { StyledBullet, StyledLine, StyledLineWrapper } from './Line.style'

export type LineProps = Readonly<{
  prevLine?: Lines
  nextLine?: Lines
  bullet?: JSX.Element
}>

export const Line = ({ prevLine, nextLine, bullet }: LineProps) => {
  // For icons, let's force the size to 16px.
  const icon =
    bullet && bullet.type !== Bullet ? cloneElement(bullet, { ...bullet.props, size: 16 }) : bullet

  return (
    <StyledLineWrapper aria-hidden="true">
      <StyledLine line={prevLine} />
      {icon && <StyledBullet>{icon}</StyledBullet>}
      <StyledLine line={nextLine} />
    </StyledLineWrapper>
  )
}
