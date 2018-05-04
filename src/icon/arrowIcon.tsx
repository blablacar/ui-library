import React from 'react'
import cc from 'classcat'

import { color } from '_utils/branding'

interface ArrowProps extends Icon {
  readonly right?: boolean,
}

export default ({
  className,
  iconColor = color.icon,
  right = false,
  size = 24,
  title = '',
}: ArrowProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={cc(['kirk-icon', className])}
    width={size}
    height={size}
    aria-hidden={title.length === 0}
  >
    { title && <title>{title}</title> }
    <g
      fill="none"
      stroke={iconColor}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinejoin="round"
      strokeLinecap="round"
      { ...(right && { transform: 'rotate(180 12 12)' }) }
    >
      <path d="M22 12H2" />
      <path d="M9 19l-7-7 7-7" />
    </g>
  </svg>
)
