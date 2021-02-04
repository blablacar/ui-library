import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const MapIcon = (props: Icon) => (
  <BaseIcon {...props} viewBox="0 0 22 20">
    <g fill="none">
      <path
        d="M8.391 1.435v15.652M13.61 3.174v15.652M1.435 3.174l6.956-1.74 5.218 1.74 6.956-1.74v15.653l-6.956 1.74-5.218-1.74-6.956 1.74z"
        stroke={props.iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </BaseIcon>
)

MapIcon.defaultProps = BaseIconDefaultProps
