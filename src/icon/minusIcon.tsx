import React from 'react'
import BaseIcon from '_utils/icon'

export const MinusIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <g
      fill="none"
      stroke={props.iconColor}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
    >
      <path d="M17 12H7" />
      <circle cx="12" cy="12" r="11" />
    </g>
  </BaseIcon>
)

MinusIcon.defaultProps = BaseIcon.defaultProps

export default React.memo(MinusIcon)
