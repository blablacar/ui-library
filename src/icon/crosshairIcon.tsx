import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '_utils/branding'

class CrossHairIcon extends PureComponent<Icon> {
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
          <path d="M0 0h24v24H0z" />
          <g stroke={iconColor} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="7.826"/>
            <path d="M12 2.435v3.478M21.565 12h-3.478M12 21.565v-3.478M2.435 12h3.478" />
            <circle cx="12" cy="12" r="1"/>
          </g>
          <circle fill={iconColor} fillRule="nonzero" cx="12" cy="12" r="1"/>
        </g>
      </svg>
    )
  }
}

export default CrossHairIcon
