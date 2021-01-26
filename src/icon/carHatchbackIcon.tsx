import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const CarHatchbackIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.491 12a.57.57 0 00.019 0H21v4h-1.55a2.5 2.5 0 00-4.9 0h-5.1a2.5 2.5 0 00-4.9 0H3v-4h14.491zM9.45 17a2.5 2.5 0 01-4.9 0H3a1 1 0 01-1-1v-4.234a1.5 1.5 0 01.198-.745l1.845-3.224C4.396 7.002 5.225 6.5 6 6.5h8c.93 0 1.582.454 1.934 1.252L17.79 11H21a1 1 0 011 1v4a1 1 0 01-1 1h-1.55a2.5 2.5 0 01-4.9 0h-5.1zm7.189-6H10.5V7.5H14c.522 0 .824.21 1.043.703L16.64 11zM9.5 11V7.5H6c-.391 0-.856.281-1.066.748L3.362 11H9.5zM7 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm11.5-1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      fill={props.iconColor}
    />
  </BaseIcon>
)

CarHatchbackIcon.defaultProps = BaseIconDefaultProps
