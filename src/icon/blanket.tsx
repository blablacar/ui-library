import React from 'react'

import { IconPropsWithStatus, StatusIcon } from '../_utils/icon/status'

export const BlanketIcon = (props: IconPropsWithStatus) => (
  <StatusIcon {...props}>
    <path
      d="M18.374 2c1.394 0 2.535 1.104 2.62 2.498l.006.168V22H5.55v-3.607h1.003v2.588h13.443V4.666c0-.859-.648-1.564-1.475-1.64l-.124-.006c-.859.11-1.646.587-1.646 1.646v12.157H3V4.666C3 3.194 4.176 2 5.626 2h12.748zm-2.055 1.02H5.626c-.896 0-1.622.737-1.622 1.646l-.001 11.137h11.744V4.666c0-.61.172-1.12.478-1.529l.094-.118z"
      fill={props.iconColor}
      fillRule="nonzero"
    />
  </StatusIcon>
)

BlanketIcon.defaultProps = StatusIcon.defaultProps
