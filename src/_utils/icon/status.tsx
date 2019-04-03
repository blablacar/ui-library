import React from 'react'

import { color } from '_utils/branding'

export enum status {
  ON = 'on',
  OFF = 'off',
  DEFAULT = 'default',
}

export const Barred = (
  <g fillRule="nonzero" strokeLinecap="round" strokeLinejoin="round">
    <path stroke={color.white} d="M1,24.5 L23.5,2" />
    <path stroke={color.danger} d="M1,23.5 L23.5,1" />
  </g>
)

export default status
