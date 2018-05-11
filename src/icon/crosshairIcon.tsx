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
