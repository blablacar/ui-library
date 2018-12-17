import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '_utils/branding'

class WarningIcon extends PureComponent<Icon> {
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
          <path
            fill={iconColor}
            // tslint:disable-next-line:max-line-length
            d="M12.3 2.1a1.5 1.5 0 0 0-2.6 0L1.2 16.2a1.5 1.5 0 0 0 1.3 2.3h17a1.5 1.5 0 0 0 1.3-2.3l-8.5-14zm.8-.5l8.5 14.1a2.5 2.5 0 0 1-2.1 3.8h-17a2.5 2.5 0 0 1-2.1-3.8L8.9 1.6a2.5 2.5 0 0 1 4.2 0zm-2.7 10.5l-.3-4.8a.9.9 0 1 1 1.8 0l-.3 4.8a.6.6 0 0 1-1.2 0zm1.5 2.5a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0z"
          />
          <path d="M-1-2h24v24H-1z"/>
        </g>
      </svg>
    )
  }
}

export default WarningIcon
