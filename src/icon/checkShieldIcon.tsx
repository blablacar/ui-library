import React from 'react'
import styled from 'styled-components'

import { color } from '../_utils/branding'
import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export type CheckShieldIconProps = Icon &
  Readonly<{
    background?: boolean
  }>

const CheckShieldIcon = ({ background, ...props }: CheckShieldIconProps) => (
  <BaseIcon {...props}>
    {background ? (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.315 2.13313C11.4925 1.95562 11.7803 1.95562 11.9578 2.13313C14.534 4.70939 16.2299 5.63438 19.9284 6.55903C20.1308 6.60961 20.2727 6.79142 20.2727 7C20.2727 14.438 17.7905 19.4025 11.8154 21.9632C11.7011 22.0123 11.5717 22.0123 11.4573 21.9632C5.48226 19.4025 3 14.438 3 7C3 6.79142 3.14195 6.60961 3.3443 6.55903C7.04287 5.63438 8.7387 4.70939 11.315 2.13313ZM9.22767 12.0593C9.04938 11.8825 8.76158 11.8838 8.58485 12.0621C8.40812 12.2404 8.40938 12.5282 8.58767 12.7049L10.373 14.4747C10.5502 14.6503 10.8358 14.6503 11.013 14.4747L15.4764 10.0503C15.6547 9.87358 15.6559 9.58578 15.4792 9.4075C15.3025 9.22921 15.0147 9.22794 14.8364 9.40467L10.693 13.5118L9.22767 12.0593Z"
      />
    ) : (
      <g>
        <path d="M21.65 5.82C17.37 4.76 15.4 3.7 12.42.74a.53.53 0 0 0-.74 0C8.69 3.7 6.73 4.76 2.45 5.82a.52.52 0 0 0-.4.5c0 8.54 2.87 14.24 9.8 17.18.12.06.27.06.4 0 6.93-2.94 9.8-8.64 9.8-17.17a.52.52 0 0 0-.4-.5zm-9.6 16.63C5.83 19.72 3.19 14.57 3.1 6.73c4.02-1.03 6.12-2.15 8.95-4.89 2.83 2.74 4.93 3.86 8.94 4.9-.08 7.83-2.72 12.98-8.94 15.71z" />
        <path d="M9.26 12.13a.53.53 0 0 0-.74 0c-.2.21-.2.54 0 .75l2.07 2.03c.2.2.53.2.74 0l5.17-5.08c.2-.2.2-.54 0-.74a.53.53 0 0 0-.74 0l-4.8 4.71-1.7-1.67z" />
      </g>
    )}
  </BaseIcon>
)

const StyledCheckShieldIcon = styled(CheckShieldIcon)`
  path {
    fill: ${props => (props.iconColor ? props.iconColor : color.lightMidnightGreen)};
  }
`

StyledCheckShieldIcon.defaultProps = {
  ...BaseIconDefaultProps,
  iconColor: color.lightMidnightGreen,
  background: false,
}

export { StyledCheckShieldIcon as CheckShieldIcon }
