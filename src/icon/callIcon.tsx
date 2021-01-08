import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const CallIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <g fill="none" fillRule="evenodd">
      <path
        d="M16 12.27L13.27 15 6 7.73 8.73 5 4.18.45 1.45 3.18c0 9.04 7.33 16.37 16.37 16.37l2.73-2.73L16 12.27z"
        stroke={props.iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </BaseIcon>
)

CallIcon.defaultProps = BaseIconDefaultProps
