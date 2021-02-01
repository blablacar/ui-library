import React from 'react'

import { color } from '../_utils/branding'
import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const FacebookIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M12 0C5.37 0 0 5.4 0 12.07 0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07 24 5.41 18.63 0 12 0z"
    />
  </BaseIcon>
)

FacebookIcon.defaultProps = {
  ...BaseIconDefaultProps,
  iconColor: color.facebookBrand,
}
