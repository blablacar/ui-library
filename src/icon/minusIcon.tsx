import React from 'react'

import BaseIcon from '../_utils/icon'
import { BaseIconDefaultProps } from '../_utils/icon/BaseIcon'

export const MinusIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <g
      fill="none"
      stroke={props.iconColor}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
    >
      <circle cx="12" cy="12" r="11" />
      <path d="M17 12H7" />
    </g>
  </BaseIcon>
)

MinusIcon.defaultProps = BaseIconDefaultProps

export default React.memo(MinusIcon)
