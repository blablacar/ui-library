import React from 'react'
import BaseIcon from '_utils/icon'

interface ArrowIconProps extends Icon {
  readonly right?: boolean
}

export const ArrowIcon = (props: ArrowIconProps) => (
  <BaseIcon {...props}>
    <g
      fill="none"
      stroke={props.iconColor}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinejoin="round"
      strokeLinecap="round"
      {...props.right && { transform: 'rotate(180 12 12)' }}
    >
      <path d="M22 12H2" />
      <path d="M9 19l-7-7 7-7" />
    </g>
  </BaseIcon>
)

ArrowIcon.defaultProps = {
  ...BaseIcon.defaultProps,
  right: false,
}

export default React.memo(ArrowIcon)
