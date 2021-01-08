import React from 'react'

import { IconPropsWithStatus, StatusIcon } from '../_utils/icon/status'

export const GenericAmenityIcon = (props: IconPropsWithStatus) => (
  <StatusIcon {...props}>
    <path
      d="M17.7 3a.5.5 0 01.39.187l3.8 4.738c.14.174.147.419.017.6l-9.501 13.267a.5.5 0 01-.812 0L2.093 8.525a.496.496 0 01.016-.6l3.8-4.738A.5.5 0 016.3 3zm-.24.995H6.539L3.124 8.25 12 20.646l8.875-12.395-3.415-4.256zm-.71 3.743a.499.499 0 01.09.99l-.09.008h-9.5a.499.499 0 01-.09-.99l.09-.008h9.5z"
      fill={props.iconColor}
      fillRule="nonzero"
    />
  </StatusIcon>
)

GenericAmenityIcon.defaultProps = StatusIcon.defaultProps
