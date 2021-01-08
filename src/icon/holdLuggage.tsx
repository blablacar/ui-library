import React from 'react'

import { IconPropsWithStatus, StatusIcon } from '../_utils/icon/status'

export const HoldLuggageIcon = (props: IconPropsWithStatus) => (
  <StatusIcon {...props}>
    <path
      d="M2.497 21A.493.493 0 012 20.51V7.746c0-.27.222-.49.497-.49h5.55V3.489c0-.24.176-.44.408-.481L8.545 3h6.91c.245 0 .447.173.49.401l.007.088v3.766h5.551c.244 0 .447.173.489.402l.008.088V20.51c0 .27-.222.489-.497.489zM5.455 8.233H2.993v11.788h2.462V8.233zm3.078 0H6.449v11.788H17.55V8.233h-2.083l-.011.001-.012-.001H8.555l-.01.001-.012-.001zm12.473 0h-2.462v11.788h2.462V8.233zM14.96 3.978H9.04l.001 3.277h5.917V3.978z"
      fill={props.iconColor}
      fillRule="nonzero"
    />
  </StatusIcon>
)

HoldLuggageIcon.defaultProps = StatusIcon.defaultProps
