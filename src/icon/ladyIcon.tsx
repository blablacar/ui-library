import React from 'react'
import cc from 'classcat'

import { color } from '_utils/branding'

export default ({ className, iconColor = color.icon, size = 24, title = '' }: Icon) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={cc(['kirk-icon', className])}
    stroke={iconColor}
    width={size}
    height={size}
    aria-hidden={title.length === 0}
  >
    {title && <title>{title}</title>}
    <g
      fill="none"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
    >
      <path d="M12 17v6M9 21h6" />
      <circle cx="12" cy="9" r="8" />
    </g>
  </svg>
)
