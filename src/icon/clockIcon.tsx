import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '_utils/branding'

class ClockIcon extends PureComponent<Icon> {
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
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={cc(['kirk-icon', className])}
        width={size}
        height={size}
        aria-hidden={isEmpty(title)}
      >
        {title && <title>{title}</title>}
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h24v24H0z" />
          <g stroke={iconColor} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9.565" />
            <path d="M12 6.783V12h5.217" />
          </g>
        </g>
      </svg>
    )
  }
}

export default ClockIcon
