import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const WarningIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <g fill="none">
      <path
        fill={props.iconColor}
        d="M12.3 2.1a1.5 1.5 0 0 0-2.6 0L1.2 16.2a1.5 1.5 0 0 0 1.3 2.3h17a1.5 1.5 0 0 0 1.3-2.3l-8.5-14zm.8-.5l8.5 14.1a2.5 2.5 0 0 1-2.1 3.8h-17a2.5 2.5 0 0 1-2.1-3.8L8.9 1.6a2.5 2.5 0 0 1 4.2 0zm-2.7 10.5l-.3-4.8a.9.9 0 1 1 1.8 0l-.3 4.8a.6.6 0 0 1-1.2 0zm1.5 2.5a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0z"
      />
    </g>
  </BaseIcon>
)

WarningIcon.defaultProps = BaseIconDefaultProps
