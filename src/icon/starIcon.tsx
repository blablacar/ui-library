import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '_utils/branding'

interface StarProps extends Icon {
  readonly bgColor?: string
  readonly fill?: number
}

class StarIcon extends PureComponent<StarProps> {
  static defaultProps: StarProps = {
    className: '',
    iconColor: color.icon,
    bgColor: color.white,
    size: 24,
    title: '',
    fill: 0,
  }

  render() {
    const { className, iconColor, bgColor, size, title, fill } = this.props
    const offset = `${fill * 100}%`
    // needs to be unique, otherwise all stars will use the first defined linear gradient
    const id = `gradient-${fill}`
    return (
      <svg
        viewBox="-2 -4 84 82"
        xmlns="http://www.w3.org/2000/svg"
        className={cc(['kirk-icon', className])}
        width={size}
        height={size}
        aria-hidden={isEmpty(title)}
      >
        {title && <title>{title}</title>}
        <linearGradient y2="0%" x2="100%" y1="0%" x1="0%" id={id}>
          <stop stopColor={iconColor} offset={offset} />
          <stop stopColor={bgColor} offset="0%" />
        </linearGradient>
        <path
          stroke={iconColor}
          strokeWidth={4}
          fill={`url(#${id})`}
          d="M 40.000 60.000 L 63.511 72.361 L 59.021 46.180
          L 78.042 27.639 L 51.756 23.820 L 40.000 0.000 L 28.244 23.820
          L 1.958 27.639 L 20.979 46.180 L 16.489 72.361 L 40.000 60.000"
        />
      </svg>
    )
  }
}

export default StarIcon
