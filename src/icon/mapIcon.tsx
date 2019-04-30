import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '_utils/branding'

class MapIcon extends PureComponent<Icon> {
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
        viewBox="0 0 22 20"
        xmlns="http://www.w3.org/2000/svg"
        className={cc(['kirk-icon', className])}
        width={size}
        height={size}
        aria-hidden={isEmpty(title)}
        fill={iconColor}
      >
        {title && <title>{title}</title>}
        <g fill="none">
          <path d="M-1-2h24v24H-1z"/>
          <path
            // tslint:disable-next-line:max-line-length
            d="M8.391 1.435v15.652M13.61 3.174v15.652M1.435 3.174l6.956-1.74 5.218 1.74 6.956-1.74v15.653l-6.956 1.74-5.218-1.74-6.956 1.74z"
            stroke={iconColor}
            strokeLinecap="round"
            strokeLinejoin="round"/>
        </g>
      </svg>
    )
  }
}

export default MapIcon
