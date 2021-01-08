import React from 'react'

import { color } from '../_utils/branding'
import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export type MyRidesIconProps = Icon &
  Readonly<{
    active?: boolean
  }>

export const MyRidesIcon = ({ active, ...props }: MyRidesIconProps) => (
  <BaseIcon {...props} viewBox="0 0 24 20">
    <g
      fill="none"
      fillRule="evenodd"
      stroke={props.iconColor}
      strokeWidth={active && !props.isDisabled ? '0' : '1'}
    >
      <path
        fill={active && !props.isDisabled ? color.midnightGreen : 'none'}
        d="M15.744 7.145c.203-1.217.39-2.31.56-3.275.044-.246.15-.83.322-1.752a.5.5 0 0 0-.405-.584l-2.64-.466a.5.5 0 0 0-.546.295c-1.066 2.48-1.794 4.855-2.184 7.126-.492 2.863-.47 5.946 1.047 8.116.326.466.721.89 1.195 1.26 1.38 1.08 3.05 1.503 4.677 1.227a6.034 6.034 0 0 0 3.658-2.117 6.043 6.043 0 0 0 1.303-4.87 6.04 6.04 0 0 0-2.564-3.992 6.036 6.036 0 0 0-4.423-.968z"
      />
      <path
        fill={active && !props.isDisabled ? color.blue : 'none'}
        d="M6.179 7.145c.19-1.143.377-2.235.56-3.275l.323-1.753a.5.5 0 0 0-.405-.583l-2.641-.466a.5.5 0 0 0-.547.295C2.404 3.843 1.676 6.218 1.286 8.49c-.492 2.863-.47 5.946 1.047 8.116.326.466.721.89 1.195 1.26 1.38 1.08 3.05 1.503 4.677 1.227a6.034 6.034 0 0 0 3.658-2.117 6.043 6.043 0 0 0 1.302-4.87 6.04 6.04 0 0 0-2.563-3.992 6.036 6.036 0 0 0-4.423-.968z"
      />
      <path
        fill={active && !props.isDisabled ? '#9EF769' : 'none'}
        d="M12 16.5a5.995 5.995 0 0 1-.123-.17c-1.516-2.17-1.54-5.252-1.047-8.115l.03-.174a6.035 6.035 0 0 1 2.284 3.79 6.039 6.039 0 0 1-1.144 4.67z"
      />
    </g>
  </BaseIcon>
)

MyRidesIcon.defaultProps = {
  ...BaseIconDefaultProps,
  active: false,
}
