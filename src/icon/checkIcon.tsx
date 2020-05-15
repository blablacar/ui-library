// tslint:disable:max-line-length
import React, { Fragment } from 'react'
import cc from 'classcat'
import styled from 'styled-components'

import BaseIcon from '../_utils/icon'
import { BaseIconDefaultProps } from '../_utils/icon/BaseIcon'

export interface CheckProps extends Icon {
  readonly absolute?: boolean
  readonly validate?: boolean
  readonly backgroundColor?: string
  readonly thin?: boolean
}

const CheckIcon = ({ absolute, validate, backgroundColor, thin, ...props }: CheckProps) => (
  <BaseIcon
    {...props}
    iconClassName={cc([
      'kirk-icon-check',
      props.iconClassName,
      {
        validate,
        absolute,
      },
    ])}
  >
    <Fragment>
      <path
        d="M6.5 12.5l4 4 8-8"
        fill="none"
        stroke={props.iconColor}
        strokeWidth={thin ? '1' : '2'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      />
    </Fragment>
  </BaseIcon>
)

export const StyledCheckIcon = styled(CheckIcon)`
  & {
    background-color: ${props => props.backgroundColor};
    border-radius: 100%;
  }
  &.absolute {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  &.validate path {
    stroke-dasharray: 24;
    stroke-dashoffset: 24;
    stroke-linecap: round;
    animation: dash 0.5s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  }
  @keyframes dash {
    from {
      stroke-dashoffset: 24;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`

StyledCheckIcon.defaultProps = {
  ...BaseIconDefaultProps,
  absolute: false,
  validate: false,
  backgroundColor: 'transparent',
  thin: false,
}

export default React.memo(StyledCheckIcon)
