// tslint:disable:max-line-length
import React from 'react'

import { color } from '../_utils/branding'
import BaseIcon from '../_utils/icon'
import { BaseIconDefaultProps } from '../_utils/icon/BaseIcon'

export const CarpoolIcon = (props: Icon) => (
  <BaseIcon {...props} viewBox="0 0 28 16">
    <g stroke={props.iconColor} fill="none" fillRule="evenodd">
      <path d="M6.62.33h8.04a4 4 0 0 1 3.2 1.6l2.8 3.75 4.06.8a3.25 3.25 0 0 1 2.61 3.19v1.66a1 1 0 0 1-1 1H4.68l-3.33-1.1a1 1 0 0 1-.68-.95v-3.6a1 1 0 0 1 1-1h1.66l2.4-4.8a1 1 0 0 1 .89-.55z" />
      <path d="M10 .33v5.34" strokeLinecap="square" />
      <path
        d="M1.67 5.67h19l4.05.8a3.25 3.25 0 0 1 2.61 3.2v1.66a1 1 0 0 1-1 1H4.68l-3.33-1.1a1 1 0 0 1-.68-.95V6.67a1 1 0 0 1 1-1z"
        fill={props.iconColor}
      />
      <circle fill={color.white} cx="7.33" cy="12.33" r="2.67" />
      <circle fill={color.white} cx="20.67" cy="12.33" r="2.67" />
    </g>
  </BaseIcon>
)

CarpoolIcon.defaultProps = BaseIconDefaultProps

export default React.memo(CarpoolIcon)
