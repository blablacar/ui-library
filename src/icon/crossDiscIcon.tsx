import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '_utils/branding'

class CrossDiscIcon extends PureComponent<Icon> {
  static defaultProps: Icon = {
    className: '',
    iconColor: color.icon,
    size: 24,
    title: '',
  }

  render() {
    const { className, iconColor, size, title } = this.props
    return (
      // tslint:disable:max-line-length
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
          d="M16.854,8.146c-0.195-0.195-0.512-0.195-0.707,0L12.5,11.793L8.854,8.146c-0.195-0.195-0.512-0.195-0.707,0
          s-0.195,0.512,0,0.707l3.646,3.646l-3.646,3.646c-0.195,0.195-0.195,0.512,0,0.707s0.512,0.195,0.707,0l3.646-3.646l3.646,3.646
          C16.244,16.951,16.372,17,16.5,17s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.512,0-0.707L13.207,12.5l3.646-3.646
          C17.049,8.658,17.049,8.342,16.854,8.146z"
        />
        <path
          d="M12.5,1C6.159,1,1,6.159,1,12.5C1,18.841,6.159,24,12.5,24C18.841,24,24,18.841,24,12.5
          C24,6.159,18.841,1,12.5,1z M12.5,23C6.71,23,2,18.29,2,12.5C2,6.71,6.71,2,12.5,2C18.29,2,23,6.71,23,12.5
          C23,18.29,18.29,23,12.5,23z"
        />
      </svg>
    )
  }
}

export default CrossDiscIcon
