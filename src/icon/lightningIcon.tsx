import React from 'react'

import BaseIcon from '../_utils/icon'
import { BaseIconDefaultProps } from '../_utils/icon/BaseIcon'

export const LightningIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill="none"
      stroke={props.iconColor}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M15.5 1.5h-7l-3 11h6l-2 8 10-12h-6z"
    />
  </BaseIcon>
)

LightningIcon.defaultProps = BaseIconDefaultProps

export default React.memo(LightningIcon)
