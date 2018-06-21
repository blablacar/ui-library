import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '_utils/branding'

class CrossIcon extends PureComponent<Icon> {
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
        <path
          d="M19 5L5 19M19 19L5 5"
          fill="none"
          stroke={iconColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
      </svg>
    )
  }
}

export default CrossIcon
