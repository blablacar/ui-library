import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export type ArrowIconProps = Icon &
  Readonly<{
    right?: boolean
  }>

export const ArrowIcon = ({ right, ...props }: ArrowIconProps) => (
  <BaseIcon {...props}>
    <g
      fill="none"
      stroke={props.iconColor}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinejoin="round"
      strokeLinecap="round"
      {...(right && { transform: 'rotate(180 12 12)' })}
    >
      <path d="M9 19l-7-7 7-7" />
      <path d="M22 12H2" />
    </g>
  </BaseIcon>
)

ArrowIcon.defaultProps = {
  ...BaseIconDefaultProps,
  right: false,
}
