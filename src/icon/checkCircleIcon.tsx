import React from 'react'
import styled from 'styled-components'

import { color } from '../_utils/branding'
import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export type CheckCircleIconProps = Icon &
  Readonly<{
    background?: boolean
  }>

const CheckCircleIcon = ({ background, ...props }: CheckCircleIconProps) => (
  <BaseIcon {...props}>
    {background ? (
      <g>
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.57 8.168a.5.5 0 010 .708l-6.957 6.956a.5.5 0 01-.707 0l-3.478-3.478a.5.5 0 11.707-.707l3.124 3.124 6.604-6.603a.5.5 0 01.707 0z"
        />
      </g>
    ) : (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.93478 12C2.93478 6.99339 6.99342 2.93475 12 2.93475C17.0066 2.93475 21.0652 6.99339 21.0652 12C21.0652 17.0066 17.0066 21.0652 12 21.0652C6.99342 21.0652 2.93478 17.0066 2.93478 12ZM12 1.93475C6.44114 1.93475 1.93478 6.4411 1.93478 12C1.93478 17.5588 6.44114 22.0652 12 22.0652C17.5589 22.0652 22.0652 17.5588 22.0652 12C22.0652 6.4411 17.5589 1.93475 12 1.93475ZM17.5708 8.87522C17.766 8.67996 17.766 8.36338 17.5708 8.16811C17.3755 7.97285 17.0589 7.97285 16.8637 8.16811L10.2607 14.7711L7.13599 11.6464C6.94073 11.4511 6.62415 11.4511 6.42889 11.6464C6.23362 11.8416 6.23362 12.1582 6.42889 12.3535L9.90715 15.8317C10.1024 16.027 10.419 16.027 10.6143 15.8317L17.5708 8.87522Z"
      />
    )}
  </BaseIcon>
)

const StyledCheckCircleIcon = styled(CheckCircleIcon)`
  path {
    fill: ${props => (props.iconColor ? props.iconColor : color.green)};
  }

  path + path {
    fill: ${color.white};
  }
`

StyledCheckCircleIcon.defaultProps = {
  ...BaseIconDefaultProps,
  iconColor: color.green,
  background: false,
}

export { StyledCheckCircleIcon as CheckCircleIcon }
