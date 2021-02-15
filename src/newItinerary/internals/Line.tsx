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

// NOTE: react-hot-loader will update dynamically the type and break type comparisons.
// A pre-rendered type need to be used to fix it.
// See: https://github.com/gaearon/react-hot-loader#checking-element-types
const BulletType = (<Bullet />).type

export const Line = ({ prevLine, nextLine, bullet }: LineProps) => {
  const isIcon = bullet && bullet.type !== BulletType
  // For icons, let's force the size to 20px.
  const icon = isIcon ? cloneElement(bullet, { ...bullet.props, size: CUSTOM_ICON_SIZE }) : bullet

  return (
    <StyledLineWrapper aria-hidden="true">
      <StyledLine line={prevLine} />
      {icon && <StyledBullet isIcon={isIcon}>{icon}</StyledBullet>}
      <StyledLine line={nextLine} />
    </StyledLineWrapper>
  )
}
