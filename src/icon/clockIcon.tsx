import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const ClockIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <g fill="none" fillRule="evenodd">
      <g stroke={props.iconColor} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9.565" />
        <path d="M12 6.783V12h5.217" />
      </g>
    </g>
  </BaseIcon>
)

ClockIcon.defaultProps = BaseIconDefaultProps
