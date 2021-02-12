import React, { cloneElement } from 'react'

import { Bullet } from '../../bullet'
import { Lines } from '../Lines'
import { StyledBullet, StyledLine, StyledLineWrapper } from './Line.style'

const CUSTOM_ICON_SIZE = 20

export type LineProps = Readonly<{
  prevLine?: Lines
  nextLine?: Lines
  bullet?: JSX.Element
}>

export const Line = ({ prevLine, nextLine, bullet }: LineProps) => {
  // For icons, let's force the size to 20px.
  const icon =
    bullet && bullet.type !== Bullet
      ? cloneElement(bullet, { ...bullet.props, size: CUSTOM_ICON_SIZE })
      : bullet

  return (
    <StyledLineWrapper aria-hidden="true">
      <StyledLine line={prevLine} />
      {icon && <StyledBullet isIcon={bullet.type !== Bullet}>{icon}</StyledBullet>}
      <StyledLine line={nextLine} />
    </StyledLineWrapper>
  )
}
