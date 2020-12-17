import React from 'react'
import styled from 'styled-components'

import { color } from '../_utils/branding'
import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

const CheckCircleIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.93478 12C2.93478 6.99339 6.99342 2.93475 12 2.93475C17.0066 2.93475 21.0652 6.99339 21.0652 12C21.0652 17.0066 17.0066 21.0652 12 21.0652C6.99342 21.0652 2.93478 17.0066 2.93478 12ZM12 1.93475C6.44114 1.93475 1.93478 6.4411 1.93478 12C1.93478 17.5588 6.44114 22.0652 12 22.0652C17.5589 22.0652 22.0652 17.5588 22.0652 12C22.0652 6.4411 17.5589 1.93475 12 1.93475ZM17.5708 8.87522C17.766 8.67996 17.766 8.36338 17.5708 8.16811C17.3755 7.97285 17.0589 7.97285 16.8637 8.16811L10.2607 14.7711L7.13599 11.6464C6.94073 11.4511 6.62415 11.4511 6.42889 11.6464C6.23362 11.8416 6.23362 12.1582 6.42889 12.3535L9.90715 15.8317C10.1024 16.027 10.419 16.027 10.6143 15.8317L17.5708 8.87522Z"
    />
  </BaseIcon>
)

const StyledCheckCircleIcon = styled(CheckCircleIcon)`
  path {
    fill: ${props => (props.iconColor ? props.iconColor : color.green)};
  }
`

StyledCheckCircleIcon.defaultProps = {
  ...BaseIconDefaultProps,
  iconColor: color.green,
}

export { StyledCheckCircleIcon as CheckCircleIcon }
