import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '_utils/branding'

class ConnectIcon extends PureComponent<Icon> {
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
        <g fill="none" fill-rule="evenodd">
          <path d="M0 0h24v24H0z" />
          <path
            // tslint:disable-next-line
            d="M11.583 11.167a3.75 3.75 0 0 0 3.75-3.75v-.834a3.75 3.75 0 0 0-7.5 0v.834a3.75 3.75 0 0 0 3.75 3.75zm0 .833A4.584 4.584 0 0 1 7 7.417v-.834a4.584 4.584 0 0 1 9.167 0v.834A4.584 4.584 0 0 1 11.583 12zm8.75 7.007v1.743c0 .23-.186.417-.416.417H3.25a.417.417 0 0 1-.417-.417v-1.743a3.742 3.742 0 0 1 2.752-3.616c2.033-.554 4.08-.891 5.998-.891 1.92 0 3.966.337 5.998.891a3.742 3.742 0 0 1 2.752 3.616zm-.833 0a2.908 2.908 0 0 0-2.138-2.812c-1.967-.537-3.944-.862-5.779-.862-1.834 0-3.811.325-5.779.862a2.908 2.908 0 0 0-2.137 2.812v1.326H19.5v-1.326z"
            fill={iconColor}
            fill-rule="nonzero"
          />
        </g>
      </svg>
    )
  }
}

export default ConnectIcon
