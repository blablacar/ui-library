import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const LadyIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <g
      fill="none"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      stroke={props.iconColor}
    >
      <path d="M12 17v6M9 21h6" />
      <circle cx="12" cy="9" r="8" />
    </g>
  </BaseIcon>
)

LadyIcon.defaultProps = BaseIconDefaultProps
