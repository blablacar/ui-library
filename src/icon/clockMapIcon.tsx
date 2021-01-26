import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const ClockMapIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <g>
      <path d="M1.5 20.4l7.4-1.8c.3-.1.5.1.6.4.1.3-.1.5-.4.6l-8 2c-.3.1-.6-.2-.6-.5V3c0-.2.2-.4.4-.5l8-2h.3l5.9 2 7.9-2c.3-.1.6.2.6.5v9c0 .3-.2.5-.5.5s-.6-.2-.6-.5V1.6l-7.4 1.8h-.3L9 1.5 1.5 3.4v17zM18.5 16.5H20c.3 0 .5.2.5.5s-.2.5-.5.5h-2c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5s.5.2.5.5v1.5z" />
      <path d="M18 22.5c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5zm0-1c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5-4.5 2-4.5 4.5 2 4.5 4.5 4.5z" />
    </g>
  </BaseIcon>
)

ClockMapIcon.defaultProps = BaseIconDefaultProps
