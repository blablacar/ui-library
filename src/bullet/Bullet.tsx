import React from 'react'
import cc from 'classcat'

import { StyledBullet } from './Bullet.style'

export enum BulletTypes {
  DEFAULT = 'default',
  SMALL = 'small',
  ADDON = 'addon',
  MAP_ACTIVE = 'map-active',
  MAP_INACTIVE = 'map-inactive',
  SEARCH = 'search',
}

export type BulletProps = Readonly<{
  className?: string
  type?: BulletTypes
}>

export const Bullet = ({ className, type }: BulletProps) => {
  const baseClassName = 'kirk-bullet'
  const classNames = cc([baseClassName, `${baseClassName}--${type}`, className])
  return <StyledBullet className={classNames} aria-hidden="true" />
}

Bullet.defaultProps = {
  className: '',
  type: BulletTypes.DEFAULT,
}
