import React from 'react'

import { IconPropsWithStatus, StatusIcon } from '../_utils/icon/status'

export const RecliningSeatIcon = (props: IconPropsWithStatus) => (
  <StatusIcon {...props}>
    <path
      d="M4.413 4.034l-1.423.342a1.308 1.308 0 00-.962 1.542l.073.177 8.49 13.118.007.017c.01.02.015.025.024.036l.066.096c.284.402.729.652 1.189.637h7.838c.708 0 1.285-.583 1.285-1.306v-3.134l-.007-.134a1.294 1.294 0 00-1.278-1.173h-6.46l-.585-1.236c-1.09-2.277-1.44-2.821-2.564-4.321-1.182-1.579-2.363-2.761-4.105-4.218-.428-.357-1.091-.562-1.588-.443zm7.08 14.78l-.07-.169L3.001 5.632l.007-.05a.282.282 0 01.21-.206l1.423-.342c.168-.04.525.07.728.24 1.558 1.302 2.64 2.364 3.684 3.705l.26.342c1.042 1.389 1.38 1.9 2.35 3.92l.964 2.037h7.088c.159 0 .285.128.285.28v3.135c0 .153-.126.28-.285.28h-7.853c-.127.004-.266-.075-.364-.213l-.048-.07-.013-.025.055.15z"
      fill={props.iconColor}
      fillRule="nonzero"
    />
  </StatusIcon>
)

RecliningSeatIcon.defaultProps = StatusIcon.defaultProps
