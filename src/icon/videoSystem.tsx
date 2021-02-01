import React from 'react'

import { IconPropsWithStatus, StatusIcon } from '../_utils/icon/status'

export const VideoSystemIcon = (props: IconPropsWithStatus) => (
  <StatusIcon {...props}>
    <path
      d="M17.184 20.021a.497.497 0 01.089.986l-.09.008H6.817a.497.497 0 01-.089-.986l.09-.008h10.367zM21.504 3c.274 0 .496.22.496.49v13.616c0 .27-.222.49-.497.49H2.497a.493.493 0 01-.497-.49V3.49C2 3.22 2.222 3 2.497 3zm-.498.978H2.993v12.638h18.013V3.978zM9.776 6.894c0-.391.442-.624.772-.408l5.183 3.405a.485.485 0 010 .814l-5.183 3.404a.497.497 0 01-.773-.407zm.992.914v4.98l3.791-2.49-3.791-2.49z"
      fill={props.iconColor}
      fillRule="nonzero"
    />
  </StatusIcon>
)

VideoSystemIcon.defaultProps = StatusIcon.defaultProps
