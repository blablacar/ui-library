// tslint:disable:max-line-length
import React from 'react'
import BaseIcon from '_utils/icon'
import { BaseIconDefaultProps } from '_utils/icon/BaseIcon'

export const CallIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M-1-2h24v24H-1z" />
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

export default React.memo(CallIcon)
