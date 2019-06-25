import React from 'react'
import BaseIcon from '_utils/icon'
import { color } from '_utils/branding'

interface StarProps extends Icon {
  readonly bgColor?: string
  readonly fill?: number
}

export const StarIcon = (props: StarProps) => {
  // needs to be unique, otherwise all stars will use the first defined linear gradient
  const id = `gradient-${props.fill}`
  const offset = `${props.fill * 100}%`

  return (
    <BaseIcon {...props} viewBox="-2 -4 84 82">
      <g>
        <linearGradient y2="0%" x2="100%" y1="0%" x1="0%" id={id}>
          <stop stopColor={props.iconColor} offset={offset} />
          <stop stopColor={props.bgColor} offset="0%" />
        </linearGradient>
        <path
          stroke={props.iconColor}
          strokeWidth={4}
          fill={`url(#${id})`}
          d="M 40.000 60.000 L 63.511 72.361 L 59.021 46.180
          L 78.042 27.639 L 51.756 23.820 L 40.000 0.000 L 28.244 23.820
          L 1.958 27.639 L 20.979 46.180 L 16.489 72.361 L 40.000 60.000"
        />
      </g>
    </BaseIcon>
  )
}

StarIcon.defaultProps = {
  ...BaseIcon.defaultProps,
  bgColor: color.white,
  fill: 0,
}

export default React.memo(StarIcon)
