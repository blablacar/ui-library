import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const CoinIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <g
      fill="none"
      stroke={props.iconColor}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.43 5.04v3.48c0 1.44 2.34 2.61 5.22 2.61s5.22-1.17 5.22-2.6V5.03" />
      <path d="M2.43 8.52V12c0 1.44 2.34 2.6 5.22 2.6a8.7 8.7 0 0 0 3.48-.66" />
      <path d="M2.43 12v3.48c0 1.44 2.34 2.6 5.22 2.6a8.7 8.7 0 0 0 3.48-.66" />
      <ellipse cx="7.65" cy="5.04" rx="5.22" ry="2.61" />
      <path d="M11.13 12v3.48c0 1.44 2.34 2.6 5.22 2.6s5.22-1.16 5.22-2.6V12" />
      <path d="M11.13 15.48v3.48c0 1.44 2.34 2.6 5.22 2.6s5.22-1.16 5.22-2.6v-3.48" />
      <ellipse cx="16.35" cy="12" rx="5.22" ry="2.61" />
    </g>
  </BaseIcon>
)

CoinIcon.defaultProps = BaseIconDefaultProps
