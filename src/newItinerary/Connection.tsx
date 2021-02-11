import React from 'react'

import { ConnectionIcon } from '../icon/connectionIcon'
import { StyledConnection } from './Connection.style'
import { ItineraryItem } from './internals/ItineraryItem'
import { Lines } from './Itinerary'

export type ConnectionProps = Readonly<{
  label: string
}>

export const Connection = ({ label }: ConnectionProps) => (
  <ItineraryItem line={Lines.CONNECTION} bullet={null}>
    <StyledConnection>
      <ConnectionIcon />
      {label}
    </StyledConnection>
  </ItineraryItem>
)
