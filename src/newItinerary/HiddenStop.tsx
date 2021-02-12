import React from 'react'

import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { Bullet, BulletTypes } from '../bullet'
import { StyledLabel } from './HiddenStop.style'
import { ItineraryItem } from './internals/ItineraryItem'
import { Lines } from './Lines'

export type HiddenStopProps = A11yProps &
  Readonly<{
    label: string
  }>

export const HiddenStop = ({ label, ...props }: HiddenStopProps) => (
  <ItineraryItem
    prevLine={Lines.ACTIVE}
    nextLine={Lines.ACTIVE}
    bullet={<Bullet type={BulletTypes.DEFAULT} />}
    {...pickA11yProps(props)}
  >
    <StyledLabel>{label}</StyledLabel>
  </ItineraryItem>
)
