import React from 'react'

import BaseIcon from '../_utils/icon'
import { BaseIconDefaultProps } from '../_utils/icon/BaseIcon'

export const LadyIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <g
      fill="none"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      stroke={props.iconColor}
    >
      <path d="M12 17v6M9 21h6" />
      <circle cx="12" cy="9" r="8" />
    </g>
  </BaseIcon>
)

LadyIcon.defaultProps = BaseIconDefaultProps

export default React.memo(LadyIcon)
