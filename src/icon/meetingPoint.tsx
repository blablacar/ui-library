// tslint:disable:max-line-length
import React from 'react'
import BaseIcon from '_utils/icon'
import { BaseIconDefaultProps } from '_utils/icon/BaseIcon'
import { color } from '_utils/branding'

interface MeetingPointIconProps extends Icon {
  readonly active?: boolean
}

export const MeetingPointIcon = (props: MeetingPointIconProps) => (
  <BaseIcon {...props} viewBox="0 0 22 22">
    <g fill="none" fillRule="evenodd">
      {!props.active && (
        <g
          transform="translate(-1 -1)"
          stroke={color.primary}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle fill={color.white} cx="12" cy="12" r="10" />
          <path d="M17 7l-3 3M17 10h-3V7" />
          <path d="M7 17l3-3M7.25 14H10v2.75" />
          <path d="M7 7l2.5 2.625M7.25 10H10V7.25" />
          <path d="M17 17l-3-3M16.75 14H14v2.75" />
        </g>
      )}
      {props.active && (
        <g
          transform="translate(-1 -1)"
          stroke={color.white}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle fill={color.primary} cx="12" cy="12" r="10" />
          <path d="M17 7l-4 4M15.75 11H13V8.25" />
          <path d="M7 17l4-4M8.25 13H11v2.75" />
          <path d="M7 7l4 4M8.25 11H11V8.25" />
          <path d="M17 17l-4-4M15.75 13H13v2.75" />
        </g>
      )}
    </g>
  </BaseIcon>
)

MeetingPointIcon.defaultProps = {
  ...BaseIconDefaultProps,
  active: false,
}

export default React.memo(MeetingPointIcon)
