import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '_utils/branding'

class ProfileIcon extends PureComponent<Icon> {
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
        { title && <title>{title}</title> }
        <g fill="none" stroke={iconColor} strokeWidth="1">
          <path d="M6.67 20.5A5 5 0 0 1 11 18h2a5 5 0 0 1 4.34 2.52"/>
          <circle cx="12" cy="12" r="10" />
          <rect width="7" height="9" x="8.5" y="6.5" rx="3.5"/>
        </g>
      </svg>
    )
  }
}

export default ProfileIcon
