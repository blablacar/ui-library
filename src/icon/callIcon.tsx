import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '_utils/branding'

class CallIcon extends PureComponent<Icon> {
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
        viewBox="0 0 22 21"
        xmlns="http://www.w3.org/2000/svg"
        className={cc(['kirk-icon', className])}
        width={size}
        height={size}
        aria-hidden={isEmpty(title)}
      >
        {title && <title>{title}</title>}
        <g fill="none" fillRule="evenodd">
          <path d="M-1-2h24v24H-1z" />
          <path
            d={
              'M16 12.27L13.27 15 6 7.73 8.73 5 4.18.45 1.45 3.18c0 9.04' +
              ' 7.33 16.37 16.37 16.37l2.73-2.73L16 12.27z'
            }
            stroke={iconColor}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    )
  }
}

export default CallIcon
