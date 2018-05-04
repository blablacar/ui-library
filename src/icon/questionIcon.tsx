import React from 'react'
import cc from 'classcat'

import { color } from '_utils/branding'

export default ({ className, iconColor = color.icon, size = 24, title = '' }: Icon) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={cc(['kirk-icon', className])}
    width={size}
    height={size}
    aria-hidden={title.length === 0}
    fill={iconColor}
  >
    {title && <title>{title}</title>}
    <path
      // tslint:disable-next-line
      d="M12.5,1C6.159,1,1,6.159,1,12.5C1,18.841,6.159,24,12.5,24C18.841,24,24,18.841,24,12.5C24,6.159,18.841,1,12.5,1zM12.5,23C6.71,23,2,18.29,2,12.5C2,6.71,6.71,2,12.5,2C18.29,2,23,6.71,23,12.5C23,18.29,18.29,23,12.5,23z"
    />
    <path
      // tslint:disable-next-line
      d="M12.5,7c-1.319,0-2.686,0.933-3.25,2.219C9.139,9.472,9.254,9.767,9.507,9.878c0.254,0.111,0.547-0.005,0.659-0.257C10.571,8.697,11.574,8,12.5,8c1.332,0,2.5,1.168,2.5,2.5S13.832,13,12.5,13c-0.276,0-0.5,0.224-0.5,0.5v2c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-1.537c1.671-0.251,3-1.735,3-3.463C16,8.603,14.397,7,12.5,7z"
    />
    <circle
      cx="12.5"
      cy="18.5"
      r="1"
    />
  </svg>
)
