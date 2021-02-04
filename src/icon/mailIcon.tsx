import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const MailIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        d="M21.5,4 C21.7761424,4 22,4.22385763 22,4.5 L22,20.5 C22,20.7454599 21.8231248,20.9496084 21.5898756,20.9919443 L21.5,21 L2.5,21 C2.22385763,21 2,20.7761424 2,20.5 L2,4.5 C2,4.22385763 2.22385763,4 2.5,4 L21.5,4 Z M21,9.366 L12.7515544,14.1426395 C12.2866634,14.4117869 11.7133366,14.4117869 11.2484456,14.1426395 L2.99991707,9.367 L2.99991707,20 L21,20 L21,9.366 Z M21,5 L2.99991707,5 L2.99991707,8.212 L11.7494819,13.2772132 C11.8786183,13.3519764 12.0328555,13.3644369 12.1703589,13.3145948 L12.2505181,13.2772132 L21,8.211 L21,5 Z"
        fill={props.iconColor}
      />
    </g>
  </BaseIcon>
)

MailIcon.defaultProps = BaseIconDefaultProps
