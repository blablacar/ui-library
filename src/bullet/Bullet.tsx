import React from 'react'
import cc from 'classcat'

export enum BulletTypes {
  DEFAULT = 'default',
  SMALL = 'small',
  ADDON = 'addon',
  MAP_ACTIVE = 'map-active',
  MAP_INACTIVE = 'map-inactive',
  SEARCH = 'search',
}

export interface BulletProps {
  readonly className?: Classcat.Class
  readonly type?: BulletTypes
}

const Bullet = ({ className, type }: BulletProps) => {
  const baseClassName = 'kirk-bullet'
  const classNames = cc([baseClassName, `${baseClassName}--${type}`, className])
  return <div className={classNames} aria-hidden="true" />
}

Bullet.defaultProps = {
  className: '',
  type: BulletTypes.DEFAULT,
}

export default Bullet
