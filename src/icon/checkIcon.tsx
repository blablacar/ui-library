import React from 'react'
import cc from 'classcat'
import styled from 'styled-components'

import { color } from '../_utils/branding'
import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export type CheckIconProps = Icon &
  Readonly<{
    absolute?: boolean
    validate?: boolean
    backgroundColor?: string
    thin?: boolean
  }>

const defaultBackgroundColor = 'transparent'

const CheckIcon = ({ absolute, validate, backgroundColor, thin, ...props }: CheckIconProps) => (
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
    <path
      d="M6.5 12.5l4 4 8-8"
      fill="none"
      strokeWidth={thin ? '1' : '2'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
    />
  </BaseIcon>
)

const StyledCheckIcon = styled(CheckIcon)`
  & {
    background-color: ${props =>
      props.isDisabled && props.backgroundColor !== defaultBackgroundColor
        ? color.gray
        : props.backgroundColor};
    border-radius: 100%;
  }

  & path {
    stroke: ${props => {
      // If there's an outer background circle, filled,
      // then when disabled it's the background that turns gray and the check is white.
      // If not (transparent default background), we gray out the check (path) when disabled.
      if (props.isDisabled && props.backgroundColor !== defaultBackgroundColor) {
        return color.white
      }
      if (props.isDisabled) {
        return color.gray
      }
      return props.iconColor
    }};
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
  backgroundColor: defaultBackgroundColor,
  thin: false,
}

export { StyledCheckIcon as CheckIcon }
