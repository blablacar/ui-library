import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '_utils/branding'

interface PinProps extends Icon {
  readonly bgColor?: string,
  readonly strokeColor?: string,
}

class PinIcon extends PureComponent<PinProps> {
  static defaultProps: PinProps = {
    className: '',
    strokeColor: color.icon,
    size: 24,
    title: '',
    bgColor: 'none',
  }

  render() {
    const { bgColor, className, size, strokeColor, title } = this.props
    return (
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={cc(['kirk-icon', className])}
        width={size}
        height={size}
        aria-hidden={isEmpty(title)}
      >
        { title && <title>{title}</title> }
        <g
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        >
          <path
            fill={bgColor}
            d="M20 9c0 4.9-8 13-8 13S4 13.9 4 9c0-5.1 4.1-8 8-8s8 2.9 8 8z"
          />
          <circle
            fill={strokeColor}
            cx="12"
            cy="9"
            r="3"
          />
        </g>
      </svg>
    )
  }
}

export default PinIcon
