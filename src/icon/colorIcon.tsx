import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export type ColorIconProps = Icon &
  Readonly<{
    borderColor?: string
  }>

export const ColorIcon = (props: ColorIconProps) => (
  <BaseIcon {...props}>
    <circle
      cx="12"
      cy="12"
      r="9.5"
      stroke={props.borderColor || props.iconColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={props.iconColor}
    />
  </BaseIcon>
)

ColorIcon.defaultProps = BaseIconDefaultProps
