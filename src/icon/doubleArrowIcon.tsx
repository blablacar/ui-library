import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '_utils/branding'

class DoubleArrowIcon extends PureComponent<Icon> {
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
            d="M7.786 16.762a.5.5 0 0 1-1 0V2.476a.5.5 0 1 1 1 0v14.286z"
            fill={iconColor}
            fillRule="nonzero"
          />
          <path
            // tslint:disable-next-line
            d="M3.83 6.64a.5.5 0 0 1-.707-.708l3.81-3.81a.5.5 0 0 1 .706 0l3.81 3.81a.5.5 0 0 1-.707.707L7.286 3.183 3.83 6.64zm12.48-.354a.5.5 0 1 1 1 0v15.238a.5.5 0 1 1-1 0V6.286z"
            fill={iconColor}
            fillRule="nonzero"
          />
          <path
            // tslint:disable-next-line
            d="M20.265 17.36a.5.5 0 0 1 .708.708l-3.81 3.81a.5.5 0 0 1-.707 0l-3.81-3.81a.5.5 0 0 1 .708-.707l3.456 3.456 3.455-3.456z"
            fill={iconColor}
            fillRule="nonzero"
          />
        </g>
      </svg>
    )
  }
}

export default DoubleArrowIcon
