// tslint:disable:max-line-length
import React from 'react'

import BaseIcon from '_utils/icon'
import { BaseIconDefaultProps } from '_utils/icon/BaseIcon'

export const SendMessageIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <g fill="none" fillRule="evenodd">
      <path
        d="M3.825 2.83l18.172 8.26a1 1 0 0 1 0 1.82L3.825 21.17a1 1 0 0 1-1.39-1.127l1.402-6.309a1 1 0 0 1 .914-.78L12 12.5a.501.501 0 0 0 0-1l-7.25-.453a1 1 0 0 1-.913-.781l-1.402-6.31a1 1 0 0 1 1.39-1.127z"
        fill={props.iconColor}
      />
    </g>
  </BaseIcon>
)

SendMessageIcon.defaultProps = BaseIconDefaultProps

export default React.memo(SendMessageIcon)
