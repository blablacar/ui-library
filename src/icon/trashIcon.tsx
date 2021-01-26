import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const TrashIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <g fillRule="evenodd">
      <path d="M18.5 21V9.5a.5.5 0 1 1 1 0v12a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 1 0V21h13z" />
      <path d="M2.5 6.5a.5.5 0 0 1 0-1h19a.5.5 0 1 1 0 1h-19z" />
      <path d="M9 3v3a.5.5 0 0 1-1 0V2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V6a.5.5 0 1 1-1 0V3H9z" />
      <path d="M11.5 12a.5.5 0 1 1 1 0v5a.5.5 0 1 1-1 0v-5zM8 12a.5.5 0 1 1 1 0v5a.5.5 0 1 1-1 0v-5zM15 12a.5.5 0 1 1 1 0v5a.5.5 0 1 1-1 0v-5z" />
    </g>
  </BaseIcon>
)

TrashIcon.defaultProps = BaseIconDefaultProps
