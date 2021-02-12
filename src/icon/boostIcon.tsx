import React from 'react'

import { color } from '../_utils/branding'
import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const BoostIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <g>
      <circle cx="12" cy="12" r="11" fill="url(#paint0_linear)" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.105 5.407a.402.402 0 01.367.12.392.392 0 01.121.367 13.196 13.196 0 01-2.896 7.59 3.019 3.019 0 01-.427 3.777L12.832 19.7l-2.122-2.102H6.83a.417.417 0 01-.428-.428v-3.898l-2.101-2.107 2.438-2.419a2.97 2.97 0 013.75-.397 12.72 12.72 0 017.616-2.942zm-4.936 5.421a1.734 1.734 0 00-2.438 0L9.514 12.05a1.726 1.726 0 002.433 2.44l1.222-1.217a1.736 1.736 0 000-2.445z"
        fill={color.white}
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="1"
          y1="23"
          x2="26.084"
          y2="18.606"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".049" stopColor={color.boostBlue} />
          <stop offset=".96" stopColor={color.blue} />
        </linearGradient>
      </defs>
    </g>
  </BaseIcon>
)

BoostIcon.defaultProps = BaseIconDefaultProps
