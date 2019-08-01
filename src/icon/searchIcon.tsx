import React from 'react'
import BaseIcon from '_utils/icon'
import { BaseIconDefaultProps } from '_utils/icon/BaseIcon'

export const SearchIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <g
      fill="none"
      stroke={props.iconColor}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
    >
      <line x1="22" y1="22" x2="16.4" y2="16.4" />
      <circle cx="10" cy="10" r="9" />
    </g>
  </BaseIcon>
)

SearchIcon.defaultProps = BaseIconDefaultProps

export default React.memo(SearchIcon)
