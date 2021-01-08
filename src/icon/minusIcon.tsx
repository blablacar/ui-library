import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const MinusIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <g
      fill="none"
      stroke={props.iconColor}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
    >
      <circle cx="12" cy="12" r="11" />
      <path d="M17 12H7" />
    </g>
  </BaseIcon>
)

MinusIcon.defaultProps = BaseIconDefaultProps
