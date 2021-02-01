import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const SendIcon = (props: Icon) => (
  <BaseIcon {...props} viewBox="0 0 21 22">
    <g
      fill="none"
      fillRule="evenodd"
      stroke={props.iconColor}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M.5 9.1l19-7.6-3.8 19z" />
      <path d="M19.5 1.5L5.2 12.9v6.7l3.5-4.1" />
    </g>
  </BaseIcon>
)

SendIcon.defaultProps = BaseIconDefaultProps
