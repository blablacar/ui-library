import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '_utils/branding'

class InfoIcon extends PureComponent<Icon> {
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
        <g transform="translate(-1 -1)" fill="none" fillRule="evenodd">
          <path d="M0 0h24v24H0z" />
          <path
            // tslint:disable-next-line
            d="M12 22.065C6.441 22.065 1.935 17.56 1.935 12 1.935 6.441 6.44 1.935 12 1.935c5.559 0 10.065 4.506 10.065 10.065 0 5.559-4.506 10.065-10.065 10.065zm0-1a9.065 9.065 0 1 0 0-18.13 9.065 9.065 0 0 0 0 18.13z"
            fill={iconColor}
            fillRule="nonzero"
          />
          <path
            // tslint:disable-next-line
            d="M10.26 11.63a.5.5 0 1 1 0-1H12a.5.5 0 0 1 .5.5v5.218a.5.5 0 1 1-1 0V11.63h-1.24zm0 5.218a.5.5 0 1 1 0-1h3.48a.5.5 0 1 1 0 1h-3.48z"
            fill={iconColor}
            fillRule="nonzero"
          />
          <circle fill={iconColor} fillRule="nonzero" cx="12" cy="7.652" r="1" />
        </g>
      </svg>
    )
  }
}

export default InfoIcon
