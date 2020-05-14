// tslint:disable:max-line-length
import React, { Fragment } from 'react'
import cc from 'classcat'
import styled, { keyframes } from 'styled-components'

import BaseIcon from '../_utils/icon'
import { BaseIconDefaultProps } from '../_utils/icon/BaseIcon'

export interface CircleProps extends Icon {
  readonly absolute?: boolean
  readonly spinning?: boolean
  readonly thin?: boolean
  readonly innerDisc?: boolean
}

const offset = 187
const duration = '1.4s'

const CircleIcon = (props: CircleProps) => (
  <BaseIcon
    {...props}
    viewBox="0 0 66 66"
    iconClassName={cc([
      'kirk-icon-circle',
      props.iconClassName,
      {
        spinning: props.spinning,
        absolute: props.absolute,
        thin: props.thin,
      },
    ])}
  >
    <Fragment>
      <circle cx="33" cy="33" r="30" fill="none" stroke={props.iconColor} />
      {props.innerDisc && (
        <circle className="inner" cx="33" cy="33" r="18" fill={props.iconColor} />
      )}
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

export const StyledCircleIcon = styled(CircleIcon)`
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

  &.thin circle {
    stroke-width: 3;
  }

  &.absolute {
    position: absolute;
  }

  & circle.inner {
    stroke-width: 0;
  }
`

StyledCircleIcon.defaultProps = {
  ...BaseIconDefaultProps,
  absolute: false,
  spinning: false,
  thin: false,
  innerDisc: false,
}

export default React.memo(StyledCircleIcon)
