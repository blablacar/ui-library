import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '_utils/branding'

class CheckShieldIcon extends PureComponent<Icon> {
  static defaultProps: Icon = {
    className: '',
    iconColor: color.icon,
    size: 24,
    title: '',
  }

  render() {
    const { className, iconColor, size, title } = this.props
    // tslint:disable:max-line-length
    return (
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={cc(['kirk-icon', className])}
        width={size}
        height={size}
        aria-hidden={isEmpty(title)}
        fill={iconColor}
      >
        {title && <title>{title}</title>}
        <path d="M21.65 5.82C17.37 4.76 15.4 3.7 12.42.74a.53.53 0 0 0-.74 0C8.69 3.7 6.73 4.76 2.45 5.82a.52.52 0 0 0-.4.5c0 8.54 2.87 14.24 9.8 17.18.12.06.27.06.4 0 6.93-2.94 9.8-8.64 9.8-17.17a.52.52 0 0 0-.4-.5zm-9.6 16.63C5.83 19.72 3.19 14.57 3.1 6.73c4.02-1.03 6.12-2.15 8.95-4.89 2.83 2.74 4.93 3.86 8.94 4.9-.08 7.83-2.72 12.98-8.94 15.71z" />
        <path d="M9.26 12.13a.53.53 0 0 0-.74 0c-.2.21-.2.54 0 .75l2.07 2.03c.2.2.53.2.74 0l5.17-5.08c.2-.2.2-.54 0-.74a.53.53 0 0 0-.74 0l-4.8 4.71-1.7-1.67z" />
      </svg>
    )
  }
}

export default CheckShieldIcon
