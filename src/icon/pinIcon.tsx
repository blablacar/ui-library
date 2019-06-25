import React from 'react'
import BaseIcon from '_utils/icon'
import { color } from '_utils/branding'

interface PinProps extends Icon {
  readonly bgColor?: string
  readonly strokeColor?: string
}

export const PinIcon = (props: PinProps) => (
  <BaseIcon {...props}>
    <g
      stroke={props.strokeColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
    >
      <path fill={props.bgColor} d="M20 9c0 4.9-8 13-8 13S4 13.9 4 9c0-5.1 4.1-8 8-8s8 2.9 8 8z" />
      <circle fill={props.strokeColor} cx="12" cy="9" r="3" />
    </g>
  </BaseIcon>
)

PinIcon.defaultProps = {
  ...BaseIcon.defaultProps,
  bgColor: 'none',
  strokeColor: color.icon,
}

export default React.memo(PinIcon)
