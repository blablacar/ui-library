import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export enum ChevronIconDirections {
  DOWN = 'DOWN',
  UP = 'UP',
  LEFT = 'LEFT',
}

export type ChevronIconProps = Icon &
  Readonly<{
    direction?: ChevronIconDirections
  }>

export const ChevronIcon = ({ direction, ...props }: ChevronIconProps) => (
  <BaseIcon {...props}>
    <polyline
      fill="none"
      stroke={props.iconColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      points="9 18 15 12 9 6"
      {...(direction === ChevronIconDirections.DOWN && { transform: 'rotate(90 12 12)' })}
      {...(direction === ChevronIconDirections.LEFT && { transform: 'rotate(180 12 12)' })}
      {...(direction === ChevronIconDirections.UP && { transform: 'rotate(-90 12 12)' })}
    />
  </BaseIcon>
)

ChevronIcon.defaultProps = {
  ...BaseIconDefaultProps,
  direction: null,
}
