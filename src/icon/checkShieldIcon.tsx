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
        <path
          d="M18.621,5.015c-4.068-1.017-5.934-2.035-8.768-4.869c-0.195-0.195-0.512-0.195-0.707,0
        C6.312,2.98,4.447,3.998,0.379,5.015C0.156,5.071,0,5.271,0,5.5c0,8.182,2.73,13.643,9.303,16.459c0.125,0.055,0.268,0.055,0.394,0
        C16.27,19.143,19,13.682,19,5.5C19,5.271,18.844,5.071,18.621,5.015z M9.5,20.955c-5.911-2.617-8.415-7.551-8.498-15.067
        C4.819,4.899,6.809,3.823,9.5,1.203c2.691,2.62,4.681,3.696,8.498,4.686C17.915,13.404,15.41,18.338,9.5,20.955z"
        />
        <path
          d="M6.852,11.065c-0.196-0.194-0.513-0.193-0.707,0.003c-0.194,0.196-0.193,0.512,0.003,0.708l1.964,1.946
        c0.195,0.193,0.509,0.193,0.704,0l4.91-4.867c0.196-0.194,0.197-0.511,0.003-0.707s-0.511-0.197-0.707-0.003l-4.558,4.517
        L6.852,11.065z"
        />
      </svg>
    )
  }
}

export default CheckShieldIcon
