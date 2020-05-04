import React from 'react'

import BaseIcon from '_utils/icon'
import { BaseIconDefaultProps } from '_utils/icon/BaseIcon'

export const ClockIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <g stroke={props.iconColor} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9.565" />
        <path d="M12 6.783V12h5.217" />
      </g>
    </g>
  </BaseIcon>
)

ClockIcon.defaultProps = BaseIconDefaultProps

export default React.memo(ClockIcon)
