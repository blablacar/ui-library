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
    {title && <title>{title}</title>}
    <g
      fill="none"
      stroke={iconColor}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
    >
      <path d="M12 7v10M17 12H7" />
      <circle cx="12" cy="12" r="11" />
    </g>
  </svg>
)
