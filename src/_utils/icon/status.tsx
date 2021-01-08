import React, { Fragment } from 'react'

import { color } from '../branding'
import { BaseIcon } from '../icon'
import { BaseIconDefaultProps, IconProps } from '../icon/BaseIcon'

export enum status {
  ON = 'on',
  OFF = 'off',
  DEFAULT = 'default',
}

export type StatusIconProps = IconProps &
  Readonly<{
    status?: status
  }>

export type IconPropsWithStatus = Omit<StatusIconProps, 'children'>

export const StatusIcon = (props: StatusIconProps) => {
  const finalProps = {
    ...props,
    iconColor: props.status === status.ON ? color.midnightGreen : props.iconColor,
  }

  return (
    <BaseIcon {...finalProps}>
      <Fragment>
        {props.children}
        {props.status === status.OFF && (
          <g fillRule="nonzero" strokeLinecap="round" strokeLinejoin="round">
            <path stroke={color.white} d="M1,24.5 L23.5,2" />
            <path stroke={color.red} d="M1,23.5 L23.5,1" />
          </g>
        )}
      </Fragment>
    </BaseIcon>
  )
}

StatusIcon.defaultProps = {
  ...BaseIconDefaultProps,
  status: status.DEFAULT,
}
