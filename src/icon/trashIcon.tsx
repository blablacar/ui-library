import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '_utils/branding'

class TrashIcon extends PureComponent<Icon> {
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
        <g fill="none" fillRule="evenodd">
          <path
            // tslint:disable-next-line
            d="M18.5 21V9.5a.5.5 0 1 1 1 0v12a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 1 0V21h13z"
            fill={iconColor}
            fillRule="nonzero"
          />
          <path d="M2.5 6.5a.5.5 0 0 1 0-1h19a.5.5 0 1 1 0 1h-19z" fill={iconColor} />
          <path
            // tslint:disable-next-line
            d="M9 3v3a.5.5 0 0 1-1 0V2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V6a.5.5 0 1 1-1 0V3H9z"
            fill={iconColor}
          />
          <path
            // tslint:disable-next-line
            d="M11.5 12a.5.5 0 1 1 1 0v5a.5.5 0 1 1-1 0v-5zM8 12a.5.5 0 1 1 1 0v5a.5.5 0 1 1-1 0v-5zM15 12a.5.5 0 1 1 1 0v5a.5.5 0 1 1-1 0v-5z"
            fill={iconColor}
            fillRule="nonzero"
          />
        </g>
      </svg>
    )
  }
}

export default TrashIcon
