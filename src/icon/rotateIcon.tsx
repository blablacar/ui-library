import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const RotateIcon = (props: Icon) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <g
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={props.iconColor}
    >
      <path d="M19.524 10c0 5.238-4.286 9.524-9.524 9.524C4.762 19.524.476 15.238.476 10 .476 4.762 4.762.476 10 .476c3.714 0 6.952 2.095 8.476 5.238" />
      <path d="M19.333.19l-.762 5.62-5.714-.762" />
    </g>
  </BaseIcon>
)

RotateIcon.defaultProps = BaseIconDefaultProps
