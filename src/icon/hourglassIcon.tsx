import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const HourglassIcon = (props: Icon) => (
  <BaseIcon {...props} viewBox="0 0 16 21">
    <g fill="none">
      <path
        d="M2.75 14.75h10.333M13.75 19.75v-.833c0-3.667-1.417-6.917-3.417-8.334 2-1.416 3.417-4.666 3.417-8.333v-.833m-11.667 0v.833c0 3.667 1.417 6.917 3.417 8.333-2 1.417-3.417 4.667-3.417 8.334v.833M.417 1.417h15m-15 18.333h15"
        stroke={props.iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </BaseIcon>
)

HourglassIcon.defaultProps = BaseIconDefaultProps
