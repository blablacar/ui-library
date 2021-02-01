import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const DoubleArrowIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <g fill={props.iconColor} fillRule="nonzero">
      <path d="M7.786 16.762a.5.5 0 0 1-1 0V2.476a.5.5 0 1 1 1 0v14.286z" />
      <path d="M3.83 6.64a.5.5 0 0 1-.707-.708l3.81-3.81a.5.5 0 0 1 .706 0l3.81 3.81a.5.5 0 0 1-.707.707L7.286 3.183 3.83 6.64zm12.48-.354a.5.5 0 1 1 1 0v15.238a.5.5 0 1 1-1 0V6.286z" />
      <path d="M20.265 17.36a.5.5 0 0 1 .708.708l-3.81 3.81a.5.5 0 0 1-.707 0l-3.81-3.81a.5.5 0 0 1 .708-.707l3.456 3.456 3.455-3.456z" />
    </g>
  </BaseIcon>
)

DoubleArrowIcon.defaultProps = BaseIconDefaultProps
