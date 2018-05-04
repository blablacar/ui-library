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
      <line
        x1="22"
        y1="22"
        x2="16.4"
        y2="16.4"
      />
      <circle
        cx="10"
        cy="10"
        r="9"
      />
    </g>
  </svg>
)
