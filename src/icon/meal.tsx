import React from 'react'

import { IconPropsWithStatus, StatusIcon } from '../_utils/icon/status'

export const MealIcon = (props: IconPropsWithStatus) => (
  <StatusIcon {...props}>
    <path
      d="M21.47 2a.53.53 0 01.521.435L22 2.53v6.313a4.319 4.319 0 01-3.787 4.286l-.001 8.341a.53.53 0 01-1.051.095l-.009-.095v-8.34a4.32 4.32 0 01-3.783-4.071l-.005-.216V2.53a.53.53 0 011.051-.095l.009.095v6.313a3.258 3.258 0 006.51.192l.006-.192V2.53a.53.53 0 01.53-.53zM6.318 2a4.318 4.318 0 014.318 4.318v2.525a4.319 4.319 0 01-3.787 4.286l-.001 8.341a.53.53 0 01-1.051.095l-.009-.095-.001-8.341A4.319 4.319 0 012 8.843V6.318A4.318 4.318 0 016.318 2zm0 1.06A3.258 3.258 0 003.06 6.318v2.525a3.258 3.258 0 006.516 0V6.318c0-1.8-1.459-3.258-3.258-3.258zM17.682 2a.53.53 0 01.521.435l.009.095v6.313a.53.53 0 01-1.051.096l-.009-.096V2.53a.53.53 0 01.53-.53z"
      fill={props.iconColor}
      fillRule="nonzero"
    />
  </StatusIcon>
)

MealIcon.defaultProps = StatusIcon.defaultProps
