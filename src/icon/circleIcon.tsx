import React, { Fragment } from 'react'
import cc from 'classcat'
import styled, { keyframes } from 'styled-components'

import { color } from '../_utils/branding'
import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export type CircleIconProps = Icon &
  Readonly<{
    absolute?: boolean
    spinning?: boolean
    thin?: boolean
    innerDisc?: boolean
  }>

const offset = 187
const duration = '1.4s'

const CircleIcon = ({ absolute, spinning, thin, innerDisc, ...props }: CircleIconProps) => (
  <BaseIcon
    {...props}
    viewBox="0 0 66 66"
    iconClassName={cc([
      'kirk-icon-circle',
      props.iconClassName,
      {
        spinning,
        absolute,
        thin,
      },
    ])}
  >
    <Fragment>
      <circle className="outer" cx="33" cy="33" r="30" fill="none" />

      {innerDisc && <circle className="inner" cx="33" cy="33" r="18" />}
    </Fragment>
  </BaseIcon>
)

const dashKeyframes = keyframes`
    0% {
      stroke-dashoffset: ${offset};
    }
    50% {
      stroke-dashoffset: ${offset / 4};
      transform: rotate(135deg);
    }
    100% {
      stroke-dashoffset: ${offset};
      transform: rotate(450deg);
    }
  `

const rotatorKeyframes = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(270deg);
    }
  `

const StyledCircleIcon = styled(CircleIcon)`
  &.spinning {
    animation: ${rotatorKeyframes} ${duration} linear infinite;
  }

  & circle {
    stroke-width: 6;
    stroke-linecap: round;
  }

  &.spinning circle {
    stroke-dasharray: ${offset};
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: ${dashKeyframes} ${duration} ease-in-out infinite;
  }

  & circle.outer {
    stroke: ${props => (props.isDisabled ? color.gray : props.iconColor)};
  }

  & circle.inner {
    stroke-width: 0;
    fill: ${props => (props.isDisabled ? color.gray : props.iconColor)};
  }

  &.thin circle {
    stroke-width: 3;
  }

  &.absolute {
    position: absolute;
  }
`

StyledCircleIcon.defaultProps = {
  ...BaseIconDefaultProps,
  absolute: false,
  spinning: false,
  thin: false,
  innerDisc: false,
}

export { StyledCircleIcon as CircleIcon }
