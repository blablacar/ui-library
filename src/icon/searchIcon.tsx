import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export type SearchIconProps = Icon &
  Readonly<{
    strokeWidth?: string
  }>

export const SearchIcon = ({ strokeWidth, ...props }: SearchIconProps) => (
  <BaseIcon {...props}>
    <g
      fill="none"
      stroke={props.iconColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
    >
      <line x1="22" y1="22" x2="16.4" y2="16.4" />
      <circle cx="10" cy="10" r="9" />
    </g>
  </BaseIcon>
)

SearchIcon.defaultProps = {
  ...BaseIconDefaultProps,
  strokeWidth: '1',
}
