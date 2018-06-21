import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '_utils/branding'

interface ChevronProps extends Icon {
  readonly down?: boolean,
  readonly left?: boolean,
}

class ChevronIcon extends PureComponent<ChevronProps> {
  static defaultProps: ChevronProps = {
    className: '',
    down: false,
    iconColor: color.icon,
    left: false,
    size: 24,
    title: '',
  }

  render() {
    const { className, down, iconColor, left, size, title } = this.props
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
        <polyline
          fill="none"
          stroke={iconColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          points="9 18 15 12 9 6"
          { ...(down && { transform: 'rotate(90 12 12)' }) }
          { ...(left && { transform: 'rotate(180 12 12)' }) }
        />
      </svg>
    )
  }
}

export default ChevronIcon
