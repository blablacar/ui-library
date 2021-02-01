import React from 'react'

import { IconPropsWithStatus, StatusIcon } from '../_utils/icon/status'

export const QrCodeIcon = (props: IconPropsWithStatus) => (
  <StatusIcon {...props}>
    <path
      d="M2 17.5a.5.5 0 01.492.41L2.5 18v3.5H6a.5.5 0 01.09.992L6 22.5H2.5a1 1 0 01-.993-.883L1.5 21.5V18a.5.5 0 01.5-.5zm20 0a.5.5 0 01.492.41l.008.09v3.5a1 1 0 01-.883.993l-.117.007H18a.5.5 0 01-.09-.992L18 21.5h3.5V18a.5.5 0 01.5-.5zM10 13a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1v-5a1 1 0 011-1h5zm3.5 4a.5.5 0 01.492.41l.008.09V19h5.5a.5.5 0 01.492.41l.008.09a.5.5 0 01-.41.492L19.5 20h-6a.5.5 0 01-.492-.41L13 19.5v-2a.5.5 0 01.5-.5zM10 14H5v5h5v-5zm-2 1a1 1 0 011 1v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-1a1 1 0 011-1h1zm11.5-2a.5.5 0 01.492.41l.008.09v3a.5.5 0 01-.992.09L19 16.5V14h-2v1.5a.5.5 0 01-.41.492L16.5 16h-3a.5.5 0 01-.492-.41L13 15.5v-2a.5.5 0 01.992-.09l.008.09V15h2v-1.5a.5.5 0 01.41-.492L16.5 13h3zM10 4a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h5zm9 0a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1V5a1 1 0 011-1h5zm-9 1H5v5h5V5zm9 0h-5v5h5V5zM8 6a1 1 0 011 1v1a1 1 0 01-1 1H7a1 1 0 01-1-1V7a1 1 0 011-1h1zm9 0a1 1 0 011 1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1V7a1 1 0 011-1h1zM6 1.5a.5.5 0 01.09.992L6 2.5H2.5V6a.5.5 0 01-.992.09L1.5 6V2.5a1 1 0 01.883-.993L2.5 1.5H6zm15.5 0a1 1 0 01.993.883l.007.117V6a.5.5 0 01-.992.09L21.5 6V2.5H18a.5.5 0 01-.09-.992L18 1.5h3.5z"
      fill={props.iconColor}
      fillRule="nonzero"
    />
  </StatusIcon>
)

QrCodeIcon.defaultProps = StatusIcon.defaultProps
