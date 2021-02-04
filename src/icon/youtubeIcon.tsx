import React from 'react'

import { color } from '../_utils/branding'
import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const YoutubeIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M21.833 8S21.667 6.583 21 6c-.75-.833-1.583-.833-2-.833C16.167 5 12 5 12 5s-4.167 0-7 .167C4.583 5.25 3.75 5.25 3 6c-.583.583-.833 2-.833 2S2 9.583 2 11.25v1.5c0 1.583.167 3.25.167 3.25s.166 1.417.833 2c.75.833 1.75.75 2.167.833C6.75 19 12 19 12 19s4.167 0 7-.25c.417-.083 1.25-.083 2-.833.583-.584.833-2 .833-2s.167-1.584.167-3.25v-1.5C22 9.583 21.833 8 21.833 8zM9.917 14.583V9l5.416 2.833-5.416 2.75z"
    />
  </BaseIcon>
)

YoutubeIcon.defaultProps = BaseIconDefaultProps
