// tslint:disable:max-line-length
import React from 'react'
import BaseIcon from '_utils/icon'
import { BaseIconDefaultProps } from '_utils/icon/BaseIcon'

export const LockIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.iconColor}
      fillRule="evenodd"
      d="M7.5 9.5v-3a4.5 4.5 0 019 0v3H18a1 1 0 011 1V21a1 1 0 01-1 1H6a1 1 0 01-1-1V10.5a1 1 0 011-1h1.5zm1 0h7v-3a3.5 3.5 0 00-7 0v3zm-2.5 1V21h12V10.5H6zm5.5 6.45a2.5 2.5 0 111 0v1.55a.5.5 0 11-1 0v-1.55zM12 16a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
    />
  </BaseIcon>
)

LockIcon.defaultProps = BaseIconDefaultProps

export default React.memo(LockIcon)
