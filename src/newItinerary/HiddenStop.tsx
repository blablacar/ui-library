import React from 'react'

import { Bullet, BulletTypes } from '../bullet'
import { Lines } from './Itinerary'
import { StyledLabel } from './HiddenStop.style'
import { ItineraryItem } from './internals/ItineraryItem'

export type HiddenStopProps = Readonly<{
  label: string
}>

export const HiddenStop = ({ label }: HiddenStopProps) => (
  <ItineraryItem line={Lines.ACTIVE} bullet={<Bullet type={BulletTypes.DEFAULT} />}>
    <StyledLabel>{label}</StyledLabel>
  </ItineraryItem>
)
