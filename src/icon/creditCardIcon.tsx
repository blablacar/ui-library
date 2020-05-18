import React from 'react'

import BaseIcon, { BaseIconDefaultProps, Icon } from '../_utils/icon'

export const CreditCardIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-18.000000, -301.000000)">
        <g transform="translate(16.000000, 296.000000)" stroke={props.iconColor}>
          <rect x="2.5" y="5.5" width="19" height="13" rx="2" />
          <path d="M3.39130435,11.5 L20.6086957,11.5" strokeLinecap="square" />
          <path d="M5.5,15.5 L11.5,15.5" strokeLinecap="square" />
          <path d="M16.5,15.5 L18.5,15.5" strokeLinecap="square" />
          <path d="M3.39130435,8.5 L20.6086957,8.5" strokeLinecap="square" />
        </g>
      </g>
    </g>
  </BaseIcon>
)

CreditCardIcon.defaultProps = BaseIconDefaultProps

export default React.memo(CreditCardIcon)
