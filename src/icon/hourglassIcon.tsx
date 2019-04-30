import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '_utils/branding'

class HourglassIcon extends PureComponent<Icon> {
  static defaultProps: Icon = {
    className: '',
    iconColor: color.icon,
    size: 24,
    title: '',
  }

  render() {
    const { className, iconColor, size, title } = this.props
    return (
      <svg
        viewBox="0 0 16 21"
        xmlns="http://www.w3.org/2000/svg"
        className={cc(['kirk-icon', className])}
        width={size}
        height={size}
        aria-hidden={isEmpty(title)}
        fill={iconColor}
      >
        {title && <title>{title}</title>}
        <g fill="none">
          <path d="M-4-1h24v24H-4z"/>
          <path
            // tslint:disable-next-line:max-line-length
            d="M2.75 14.75h10.333M13.75 19.75v-.833c0-3.667-1.417-6.917-3.417-8.334 2-1.416 3.417-4.666 3.417-8.333v-.833m-11.667 0v.833c0 3.667 1.417 6.917 3.417 8.333-2 1.417-3.417 4.667-3.417 8.334v.833M.417 1.417h15m-15 18.333h15"
            stroke={iconColor}
            strokeLinecap="round"
            strokeLinejoin="round"/>
        </g>
      </svg>
    )
  }
}

export default HourglassIcon
