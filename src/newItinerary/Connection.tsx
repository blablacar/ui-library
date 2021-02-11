import React from 'react'

import { Lines } from './Itinerary'
import { StyledConnection } from './Connection.style'
import { ItineraryItem } from './internals/ItineraryItem'
import { ConnectionIcon } from '../icon/connectionIcon'

export type ConnectionProps = Readonly<{
  label: string
}>

export const Connection = ({ label }: ConnectionProps) => (
  <ItineraryItem line={Lines.CONNECTION} bullet={null}>
    <StyledConnection><ConnectionIcon/>{label}</StyledConnection>
  </ItineraryItem>
)
