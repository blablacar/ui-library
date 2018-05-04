import React from 'react'
import cc from 'classcat'

import { color } from '_utils/branding'

interface CheckProps extends Icon {
  readonly absolute?: boolean,
  readonly validate?: boolean,
}

export default ({
  absolute = false,
  className,
  iconColor = color.icon,
  size = 24,
  title = '',
  validate = false,
}: CheckProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={cc(['kirk-icon', className, { validate, absolute }])}
    width={size}
    height={size}
    aria-hidden={title.length === 0}
  >
    {title && <title>{title}</title>}
    <path
      d="M6.5 12.5l4 4 8-8"
      fill="none"
      stroke={iconColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
    />
    <style jsx>
      {`.absolute {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
        }
        .validate path {
          stroke-dasharray: 24;
          stroke-dashoffset: -24;
          stroke-linecap: round;
          animation: dash 0.5s cubic-bezier(0.650, 0.000, 0.450, 1.000) forwards;
        }
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}
    </style>
  </svg>
)
