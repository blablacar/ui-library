import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export type ChevronIconProps = Icon &
  Readonly<{
    down?: boolean
    left?: boolean
    up?: boolean
  }>

export const ChevronIcon = ({ down, left, up, ...props }: ChevronIconProps) => (
  <BaseIcon {...props}>
    <polyline
      fill="none"
      stroke={props.iconColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      points="9 18 15 12 9 6"
      {...(down && { transform: 'rotate(90 12 12)' })}
      {...(left && { transform: 'rotate(180 12 12)' })}
      {...(up && { transform: 'rotate(-90 12 12)' })}
    />
  </BaseIcon>
)

ChevronIcon.defaultProps = {
  ...BaseIconDefaultProps,
  down: false,
  left: false,
}
