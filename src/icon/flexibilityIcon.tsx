import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const FlexibilityIcon = (props: Icon) => (
  <BaseIcon {...props} viewBox="0 0 24 24">
    <path
      fill={props.iconColor}
      fillRule="evenodd"
      d="M20 10a10 10 0 01-10 9.9 10 10 0 01-8.4-4.6L1 20l-1-.1.9-6.6 6.6.9-.1 1-5.2-.7A9 9 0 0010 19a9 9 0 009-8.7V10zM19 0l1 .1-.9 6.6-6.6-.9.1-1 5.2.7A9 9 0 0010 1a9 9 0 00-9 8.7v.3H0A10 10 0 0110 .1a10 10 0 018.4 4.6z"
    />
  </BaseIcon>
)

FlexibilityIcon.defaultProps = BaseIconDefaultProps
