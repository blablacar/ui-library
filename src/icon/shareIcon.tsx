import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const ShareIcon = (props: Icon) => (
  <BaseIcon {...props} viewBox="0 0 22 22">
    <g fill="none" stroke={props.iconColor} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.043 10.435l5.914-2.957m-5.914 6l5.914 2.957" />
      <circle cx="5.913" cy="12" r="3.478" />
      <circle cx="18.087" cy="5.913" r="3.478" />
      <circle cx="18.087" cy="18.087" r="3.478" />
    </g>
  </BaseIcon>
)

ShareIcon.defaultProps = BaseIconDefaultProps
