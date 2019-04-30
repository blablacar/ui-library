import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '_utils/branding'

class FlagsIcon extends PureComponent<Icon> {
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
        viewBox="0 0 20 22"
        xmlns="http://www.w3.org/2000/svg"
        className={cc(['kirk-icon', className])}
        width={size}
        height={size}
        aria-hidden={isEmpty(title)}
        fill={iconColor}
      >
        {title && <title>{title}</title>}
        <g fill="none">
          <path d="M-2-1h24v24H-2z"/>
          <path
            stroke={iconColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.74 5.783h6.086L17.087 11l1.74 5.217H7.521"/>
          <path
            stroke={iconColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M1.435 2.304h11.304V12.74H1.435M1.435 1.435v19.13"/>
        </g>
      </svg>
    )
  }
}

export default FlagsIcon
