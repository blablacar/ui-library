import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const ProfileIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <g fill="none" stroke={props.iconColor} strokeWidth="1">
      <circle cx="12" cy="12" r="10" />
      <path d="M6.67 20.5A5 5 0 0 1 11 18h2a5 5 0 0 1 4.34 2.52" />
      <rect width="7" height="9" x="8.5" y="6.5" rx="3.5" />
    </g>
  </BaseIcon>
)

ProfileIcon.defaultProps = BaseIconDefaultProps
