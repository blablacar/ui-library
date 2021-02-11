import React from 'react'

import { Bullet, BulletTypes } from '../bullet'
import { StyledLabel } from './HiddenStop.style'
import { ItineraryItem } from './internals/ItineraryItem'
import { Lines } from './Lines'

export type HiddenStopProps = Readonly<{
  label: string
}>

export const HiddenStop = ({ label }: HiddenStopProps) => (
  <ItineraryItem
    prevLine={Lines.ACTIVE}
    nextLine={Lines.ACTIVE}
    bullet={<Bullet type={BulletTypes.DEFAULT} />}
  >
    <StyledLabel>{label}</StyledLabel>
  </ItineraryItem>
)
