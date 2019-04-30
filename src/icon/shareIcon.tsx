import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '_utils/branding'

class ShareIcon extends PureComponent<Icon> {
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
        viewBox="0 0 22 22"
        xmlns="http://www.w3.org/2000/svg"
        className={cc(['kirk-icon', className])}
        width={size}
        height={size}
        aria-hidden={isEmpty(title)}
        fill={iconColor}
      >
        {title && <title>{title}</title>}
        <g fill="none">
          <path d="M0 0h24v24H0z"/>
          <path
            stroke={iconColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.043 10.435l5.914-2.957m-5.914 6l5.914 2.957" />
          <circle
            stroke={iconColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            cx="5.913" cy="12" r="3.478"/>
          <circle
            stroke={iconColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            cx="18.087" cy="5.913" r="3.478"/>
          <circle
            stroke={iconColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            cx="18.087" cy="18.087" r="3.478"/>
        </g>
      </svg>
    )
  }
}

export default ShareIcon
