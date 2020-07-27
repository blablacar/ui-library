// tslint:disable:max-line-length
import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

const RedCircleIcon = (props: Icon) => (
  <BaseIcon {...props} size={16} viewBox="0 0 16 16">
    <path
      d="M15.5 8C15.5 3.85786 12.1421 0.5 8 0.5C3.85786 0.5 0.5 3.85786 0.5 8C0.5 12.1421 3.85786 15.5 8 15.5C12.1421 15.5 15.5 12.1421 15.5 8Z"
      fill="#F53F5B"
      stroke="white"
    />
  </BaseIcon>
)

RedCircleIcon.defaultProps = BaseIconDefaultProps

export { RedCircleIcon }
