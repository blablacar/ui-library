// tslint:disable:max-line-length
import React, { Fragment } from 'react'
import cc from 'classcat'
import BaseIcon from '_utils/icon'
import { BaseIconDefaultProps } from '_utils/icon/BaseIcon'
import styled from 'styled-components'

interface CircleProps extends Icon {
  readonly absolute?: boolean
  readonly spinning?: boolean
  readonly thin?: boolean
  readonly innerDisc?: boolean
}

const offset = 187
const duration = '1.4s'

const CircleIcon = (props: CircleProps) => (
    <BaseIcon {...props} viewBox="0 0 66 66" className={cc([
      'kirk-icon-circle',
      props.className,
      {
        spinning: props.spinning,
        absolute: props.absolute,
        thin: props.thin,
      }
    ])}>
      <Fragment>
        <circle cx="33" cy="33" r="30" fill="none" stroke={props.iconColor} />
        {props.innerDisc && <circle className="inner" cx="33" cy="33" r="18" fill={props.iconColor} />}
      </Fragment>
    </BaseIcon>
)

export const StyledCircleIcon = styled(CircleIcon)`
  @keyframes dash {
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
  }
  @keyframes rotator {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(270deg);
    }
  }

  &.spinning {
    animation: rotator ${duration} linear infinite;
  }

  & circle {
    stroke-width: 6;
    stroke-linecap: round;
  }

  &.spinning circle {
    stroke-dasharray: ${offset};
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: dash ${duration} ease-in-out infinite;
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
