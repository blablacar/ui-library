// tslint:disable:max-line-length
import React from 'react'
import BaseIcon from '_utils/icon'
import { BaseIconDefaultProps } from '_utils/icon/BaseIcon'

export const WheelchairIcon = (props: Icon) => (
  <BaseIcon {...props} viewBox="0 0 100 100">
    <g>
      <path d="M35.346 17.776c4.522-.417 8.035-4.314 8.035-8.87C43.381 4 39.381 0 34.476 0c-4.905 0-8.905 4-8.905 8.905 0 1.496.417 3.027 1.113 4.314l3.173 44.65 32.68.009 13.405 31.406 17.598-6.901-2.725-6.49-9.849 3.556-12.97-29.942-30.385.204-.417-5.655 21.997.009v-8.367l-22.836-.008-1.01-17.914z" />
      <path d="M68.214 81.81c-5.516 10.903-17.06 18.087-29.375 18.087C20.752 99.897 6 85.145 6 67.058c0-12.7 7.697-24.5 19.181-29.732l.744 9.699c-6.793 4.28-10.98 12.004-10.98 20.1 0 13.12 10.7 23.822 23.821 23.822 12.004 0 22.24-9.213 23.636-21.03l5.812 11.893z" />
    </g>
  </BaseIcon>
)

WheelchairIcon.defaultProps = BaseIconDefaultProps

export default React.memo(WheelchairIcon)
