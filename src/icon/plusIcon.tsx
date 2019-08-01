import React from 'react'
import BaseIcon from '_utils/icon'
import { BaseIconDefaultProps } from '_utils/icon/BaseIcon'

export const PlusIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <g
      fill="none"
      stroke={props.iconColor}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
    >
      <path d="M12 7v10M17 12H7" />
      <circle cx="12" cy="12" r="11" />
    </g>
  </BaseIcon>
)

PlusIcon.defaultProps = BaseIconDefaultProps

export default React.memo(PlusIcon)
