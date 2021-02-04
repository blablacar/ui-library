import React from 'react'
import styled from 'styled-components'

import { color } from '../_utils/branding'
import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

const BusIcon = (props: Icon) => (
  <BaseIcon {...props} viewBox="0 0 28 17">
    <g
      transform="translate(0 1)"
      fill="none"
      fillRule="evenodd"
      color={props.iconColor}
      stroke="currentColor"
    >
      <path d="M.67 6.33V2C.67.92 1.33.33 2.33.33h21.02C26 .33 27.33 3.01 27.33 5v6.34a1 1 0 0 1-1 1H4.67l-3.32-1.11a1 1 0 0 1-.68-.95V6.33z" />
      <path
        d="M.67 5h20c1 0 1.66 1.66 2.66 1.66h4v4.67a1 1 0 0 1-1 1H4.67L1 11.1a.5.5 0 0 1-.34-.47V5z"
        fill="currentColor"
      />
      <path d="M4 7h7.33" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.67 5.67V.33M10 5V.33m5.33 6v-6m5.34 6v-6" strokeLinecap="square" />
      <circle fill={color.white} cx="22.67" cy="13" r="2" />
      <circle fill={color.white} cx="6" cy="13" r="2" />
      <circle fill={color.white} cx="11.67" cy="13" r="2" />
    </g>
  </BaseIcon>
)

const StyledBusIcon = styled(BusIcon)`
  & path,
  & circle {
    color: ${props => (props.isDisabled ? color.gray : 'currentColor')};
  }
`

StyledBusIcon.defaultProps = {
  ...BaseIconDefaultProps,
}

export { StyledBusIcon as BusIcon }
