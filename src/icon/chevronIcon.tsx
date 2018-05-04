import React from 'react'
import cc from 'classcat'

import { color } from '_utils/branding'

interface ChevronProps extends Icon {
  readonly down?: boolean,
  readonly left?: boolean,
}

export default ({
  className,
  down = false,
  iconColor = color.icon,
  left = false,
  size = 24,
  title = '',
}: ChevronProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={cc(['kirk-icon', className])}
    width={size}
    height={size}
    aria-hidden={title.length === 0}
  >
    {title && <title>{title}</title>}
    <polyline
      fill="none"
      stroke={iconColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      points="9 18 15 12 9 6"
      { ...(down && { transform: 'rotate(90 12 12)' }) }
      { ...(left && { transform: 'rotate(180 12 12)' }) }
    />
  </svg>
)
