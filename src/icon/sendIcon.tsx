import React from 'react'

import BaseIcon from '../_utils/icon'
import { BaseIconDefaultProps } from '../_utils/icon/BaseIcon'

export const SendIcon = (props: Icon) => (
  <BaseIcon {...props} viewBox="0 0 21 22">
    <g fill="none" fillRule="evenodd">
      <path d="M-2-1h24v24H-2z" />
      <path
        stroke={props.iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.52 1.48L5.24 12.9v6.67l3.43-4.1"
      />
      <path
        stroke={props.iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M.48 9.1l19.04-7.62-3.8 19.04z"
      />
    </g>
  </BaseIcon>
)

SendIcon.defaultProps = BaseIconDefaultProps

export default React.memo(SendIcon)
