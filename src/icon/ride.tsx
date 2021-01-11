import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const RideIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.411 9.673l1.366.903A1.67 1.67 0 0122.5 12v8a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2h-13v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-7.989a1.678 1.678 0 01.594-1.341c.05-.04.05-.04.089-.068l.035-.023 1.372-.907 1.928-5.104A1.438 1.438 0 016.87 3.5h10.274c.63.017 1.17.452 1.324 1.023l1.943 5.15zM18.5 17h3v-5.011a.686.686 0 00-.264-.572L19.85 10.5H4.151l-1.01.667-.377.25c-.02.013-.02.013-.035.025a.595.595 0 00-.09.094A.694.694 0 002.5 12v5h16zm1 1v2h2v-2h-2zm-17 0h2v2h-2v-2zm16.778-8.5l-1.76-4.668c-.053-.196-.216-.327-.387-.332H6.884c-.185.005-.348.136-.416.377L4.724 9.5h14.554zM4.5 15h3a.5.5 0 000-1h-3a.5.5 0 000 1zm15 0h-3a.5.5 0 010-1h3a.5.5 0 010 1z"
      fill={props.iconColor}
    />
  </BaseIcon>
)

RideIcon.defaultProps = BaseIconDefaultProps
