import React from 'react'

import BaseIcon from '../_utils/icon'
import { BaseIconDefaultProps } from '../_utils/icon/BaseIcon'

export interface ChevronProps extends Icon {
  readonly down?: boolean
  readonly left?: boolean
}

export const ChevronIcon = ({ down, left, ...props }: ChevronProps) => (
  <BaseIcon {...props}>
    <polyline
      fill="none"
      stroke={props.iconColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      points="9 18 15 12 9 6"
      {...(down && { transform: 'rotate(90 12 12)' })}
      {...(left && { transform: 'rotate(180 12 12)' })}
    />
  </BaseIcon>
)

ChevronIcon.defaultProps = {
  ...BaseIconDefaultProps,
  down: false,
  left: false,
}

export default React.memo(ChevronIcon)
