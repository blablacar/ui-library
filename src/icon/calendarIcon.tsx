import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const CalendarIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <g fill="none" fillRule="evenodd">
      <path
        d="M18.087 4.174h3.478v17.391H2.435V4.174h3.478m1.74 0h8.695"
        stroke={props.iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.913 2.435h1.74v3.478h-1.74V2.435zm10.435 0h1.739v3.478h-1.74V2.435zM2.435 9.39h19.13-19.13zM5.913 12.87h1.74v.87h-1.74v-.87zm5.217 0h1.74v.87h-1.74v-.87zm-5.217 4.347h1.74v.87h-1.74v-.87zm5.217 0h1.74v.87h-1.74v-.87zm5.218-4.347h1.739v.87h-1.74v-.87z"
        stroke={props.iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.913 12.87h1.74v.87h-1.74v-.87zm5.217 0h1.74v.87h-1.74v-.87zm-5.217 4.347h1.74v.87h-1.74v-.87zm5.217 0h1.74v.87h-1.74v-.87zm5.218-4.347h1.739v.87h-1.74v-.87z"
        fill={props.iconColor}
        fillRule="nonzero"
      />
    </g>
  </BaseIcon>
)

CalendarIcon.defaultProps = BaseIconDefaultProps
