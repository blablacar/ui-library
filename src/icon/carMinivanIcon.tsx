import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const CarMinivanIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.75 16.667H2.833v-5h18.334v5h-2.751a2.292 2.292 0 00-4.084 0H8.833a2.292 2.292 0 00-4.083 0zM22 11.25v5.417c0 .46-.373.833-.833.833h-2.511a2.292 2.292 0 11-4.565 0H9.074a2.292 2.292 0 11-4.565 0H2.833A.833.833 0 012 16.667V7.083C2 5.928 2.97 5 4.16 5h13.067C19.782 5 22 7.184 22 10v1.25zm-6.667-5.417h1.894c2.098 0 3.94 1.814 3.94 4.167v.833h-5.834v-5zm-.833 0H8.667v5H14.5v-5zm-6.667 5h-5v-3.75c0-.686.59-1.25 1.326-1.25h3.674v5zm-2.436 6.45a.414.414 0 00.043-.123 1.459 1.459 0 11-.043.122zm10.977 1.883a1.458 1.458 0 100-2.916 1.458 1.458 0 000 2.916z"
      fill={props.iconColor}
    />
  </BaseIcon>
)

CarMinivanIcon.defaultProps = BaseIconDefaultProps
