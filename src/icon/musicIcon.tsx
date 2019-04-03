import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '_utils/branding'
import statusList, { Barred } from '_utils/icon/status'

interface MusicIconProps extends Icon {
  readonly status?: statusList
}

class MusicIcon extends PureComponent<MusicIconProps> {
  static defaultProps: MusicIconProps = {
    className: '',
    iconColor: color.icon,
    size: 24,
    title: '',
    status: statusList.DEFAULT,
  }

  render() {
    const { className, iconColor, size, title, status } = this.props
    const finalColor = status === statusList.ON ? color.iconHighlight : iconColor

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

        <g fill={finalColor}>
          <path
            // tslint:disable-next-line:max-line-length
            d="M23.5,1h-15C8.224,1,8,1.224,8,1.5v15.882C7.266,16.542,6.2,16,5,16c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4V8h14v7.382C22.267,14.542,21.2,14,20,14c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4V1.5C24,1.224,23.776,1,23.5,1zM5,23c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3S6.654,23,5,23z M20,21c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3S21.654,21,20,21z M9,7V2h14v5H9z"
          />
          {status === statusList.OFF && Barred}
        </g>
      </svg>
    )
  }
}

export default MusicIcon
