import React from 'react'

import { IconPropsWithStatus, StatusIcon } from '../_utils/icon/status'

export const ComfortSeatIcon = (props: IconPropsWithStatus) => (
  <StatusIcon {...props}>
    <g fill={props.iconColor} fillRule="nonzero">
      <path d="M4.41 4.063l-1.423.342a1.295 1.295 0 00-.96 1.525l.07.17 8.49 13.14.007.017.09.132c.255.361.642.6 1.055.634l7.976.004A1.29 1.29 0 0021 18.732v-3.14l-.007-.132a1.29 1.29 0 00-1.278-1.162h-6.456l-.686-1.45c-1.012-2.106-1.374-2.662-2.462-4.117-1.182-1.58-2.363-2.764-4.105-4.223-.429-.36-1.095-.566-1.596-.445zm7.084 14.8l-.067-.165L3 5.656l.008-.062a.29.29 0 01.213-.217l1.423-.342c.164-.04.518.07.72.24 1.558 1.304 2.64 2.369 3.685 3.713l.26.342c1.13 1.51 1.433 1.986 2.614 4.48l.7 1.488h7.092a.29.29 0 01.285.295v3.14a.29.29 0 01-.285.294l-7.822.001a.465.465 0 01-.391-.215l-.048-.07-.014-.024.054.143z" />
      <path
        d="M17.5 9h-1.204L15 7.093 13.704 9H12.5l1.883-2.65L12.706 4h1.212L15 5.6 16.09 4h1.204l-1.677 2.35L17.5 9zm1.914-5v4.136H21.5V9h-3V4h.914z"
        stroke={props.iconColor}
        strokeWidth=".5"
        strokeLinejoin="round"
      />
    </g>
  </StatusIcon>
)

ComfortSeatIcon.defaultProps = StatusIcon.defaultProps
