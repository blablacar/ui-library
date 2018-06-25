import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '_utils/branding'

interface ArrowProps extends Icon {
  readonly right?: boolean,
}

class ArrowIcon extends PureComponent<ArrowProps> {
  static defaultProps: ArrowProps = {
    className: '',
    iconColor: color.icon,
    right:  false,
    size:  24,
    title: '',
  }

  render() {
    const { className, iconColor, right, size, title } = this.props
    return <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cc(['kirk-icon', className])}
      width={size}
      height={size}
      aria-hidden={isEmpty(title)}
    >
      { title && <title>{title}</title> }
      <g
        fill="none"
        stroke={iconColor}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinejoin="round"
        strokeLinecap="round"
        { ...(right && { transform: 'rotate(180 12 12)' }) }
      >
        <path d="M22 12H2" />
        <path d="M9 19l-7-7 7-7" />
      </g>
    </svg>
  }
}

export default ArrowIcon
