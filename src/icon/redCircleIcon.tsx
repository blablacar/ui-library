import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const RedCircleIcon = (props: Icon) => (
  <BaseIcon {...props} size={24} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="7.5" fill="#F53F5B" stroke="white" />
  </BaseIcon>
)

RedCircleIcon.defaultProps = BaseIconDefaultProps
