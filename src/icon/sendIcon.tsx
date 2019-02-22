import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '_utils/branding'

class SendIcon extends PureComponent<Icon> {
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
        viewBox="0 0 21 22"
        xmlns="http://www.w3.org/2000/svg"
        className={cc(['kirk-icon', className])}
        width={size}
        height={size}
        aria-hidden={isEmpty(title)}
      >
        {title && <title>{title}</title>}
        <g fill="none" fillRule="evenodd">
          <path d="M-2-1h24v24H-2z" />
          <path
            stroke={iconColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.52 1.48L5.24 12.9v6.67l3.43-4.1"
          />
          <path
            stroke={iconColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M.48 9.1l19.04-7.62-3.8 19.04z"
          />
        </g>
      </svg>
    )
  }
}

export default SendIcon
