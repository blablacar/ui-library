import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const GiftIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <g
      stroke={props.iconColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      fillRule="evenodd"
    >
      <path d="M18.83 8.4v12.17H3.17V8.39h15.66zM1.43 4.9h19.14V8.4H1.43V4.91z" />
      <path d="M5.78 3.17c0-.96.78-1.74 1.74-1.74C10.1 1.43 11 4.91 11 4.91H7.52s-1.74-.78-1.74-1.74zm10.44 0c0-.96-.78-1.74-1.74-1.74C11.9 1.43 11 4.91 11 4.91h3.48s1.74-.78 1.74-1.74zm-3.48 1.74v15.66H9.26V4.9h3.48z" />
    </g>
  </BaseIcon>
)

GiftIcon.defaultProps = BaseIconDefaultProps
