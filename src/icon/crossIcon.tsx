import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const CrossIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      d="M19 5L5 19M19 19L5 5"
      fill="none"
      stroke={props.iconColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
    />
  </BaseIcon>
)

CrossIcon.defaultProps = BaseIconDefaultProps
