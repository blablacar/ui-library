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
    <path
      fill={iconColor}
      // tslint:disable-next-line
      d="M22 0H2C.895 0 0 .895 0 2v20c0 1.105.895 2 2 2h11v-9h-3v-4h3V8.413c0-3.1 1.893-4.788 4.66-4.788 1.324 0 2.462.1 2.794.143v3.24h-1.918c-1.504 0-1.795.716-1.795 1.764V11h4.44l-1 4h-3.44v9H22c1.105 0 2-.895 2-2V2c0-1.105-.895-2-2-2z"
    />
  </svg>
)
