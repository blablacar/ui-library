import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const BanIcon = (props: Icon) => (
  <BaseIcon {...props} viewBox="0 0 22 22">
    <path
      d="M11 1C5.455 1 1 5.455 1 11s4.455 10 10 10 10-4.455 10-10S16.545 1 11 1zm0 3.636c1.09 0 2.09.273 3 .728L5.364 14a6.644 6.644 0 0 1-.728-3A6.324 6.324 0 0 1 11 4.636zm0 12.728c-1.09 0-2.09-.273-3-.728L16.636 8c.455.91.728 1.91.728 3A6.324 6.324 0 0 1 11 17.364z"
      stroke={props.iconColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </BaseIcon>
)

BanIcon.defaultProps = BaseIconDefaultProps
