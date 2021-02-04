import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const ExclamationIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-337.000000, -417.000000)">
        <g transform="translate(336.000000, 416.000000)">
          <g>
            <path
              d="M12,22.0652174 C6.44113393,22.0652174 1.93478261,17.5588661 1.93478261,12 C1.93478261,6.44113393 6.44113393,1.93478261 12,1.93478261 C17.5588661,1.93478261 22.0652174,6.44113393 22.0652174,12 C22.0652174,17.5588661 17.5588661,22.0652174 12,22.0652174 Z M12,21.0652174 C17.0065813,21.0652174 21.0652174,17.0065813 21.0652174,12 C21.0652174,6.99341868 17.0065813,2.93478261 12,2.93478261 C6.99341868,2.93478261 2.93478261,6.99341868 2.93478261,12 C2.93478261,17.0065813 6.99341868,21.0652174 12,21.0652174 Z"
              fill={props.iconColor}
              fillRule="nonzero"
            />
            <path
              d="M11.5,7.65217391 C11.5,7.37603154 11.7238576,7.15217391 12,7.15217391 C12.2761424,7.15217391 12.5,7.37603154 12.5,7.65217391 L12.5,12.8695652 C12.5,13.1457076 12.2761424,13.3695652 12,13.3695652 C11.7238576,13.3695652 11.5,13.1457076 11.5,12.8695652 L11.5,7.65217391 Z"
              fill={props.iconColor}
              fillRule="nonzero"
            />
            <circle fill={props.iconColor} fillRule="nonzero" cx="12" cy="16.3478261" r="1" />
          </g>
        </g>
      </g>
    </g>
  </BaseIcon>
)

ExclamationIcon.defaultProps = BaseIconDefaultProps
