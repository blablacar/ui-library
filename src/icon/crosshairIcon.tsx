import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const CrosshairIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <g fill="none" fillRule="evenodd">
      <g stroke={props.iconColor} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="7.826" />
        <path d="M12 2.435v3.478M21.565 12h-3.478M12 21.565v-3.478M2.435 12h3.478" />
        <circle cx="12" cy="12" r="1" />
      </g>
      <circle fill={props.iconColor} fillRule="nonzero" cx="12" cy="12" r="1" />
    </g>
  </BaseIcon>
)

CrosshairIcon.defaultProps = BaseIconDefaultProps
