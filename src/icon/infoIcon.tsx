import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const InfoIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <g transform="translate(-1 -1)" fill="none" fillRule="evenodd">
      <path
        d="M12 22.065C6.441 22.065 1.935 17.56 1.935 12 1.935 6.441 6.44 1.935 12 1.935c5.559 0 10.065 4.506 10.065 10.065 0 5.559-4.506 10.065-10.065 10.065zm0-1a9.065 9.065 0 1 0 0-18.13 9.065 9.065 0 0 0 0 18.13z"
        fill={props.iconColor}
        fillRule="nonzero"
      />
      <path
        d="M10.26 11.63a.5.5 0 1 1 0-1H12a.5.5 0 0 1 .5.5v5.218a.5.5 0 1 1-1 0V11.63h-1.24zm0 5.218a.5.5 0 1 1 0-1h3.48a.5.5 0 1 1 0 1h-3.48z"
        fill={props.iconColor}
        fillRule="nonzero"
      />
      <circle fill={props.iconColor} fillRule="nonzero" cx="12" cy="7.652" r="1" />
    </g>
  </BaseIcon>
)

InfoIcon.defaultProps = BaseIconDefaultProps
