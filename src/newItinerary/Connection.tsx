import React from 'react'

import { ConnectionIcon } from '../icon/connectionIcon'
import { StyledConnection } from './Connection.style'
import { ItineraryItem } from './internals/ItineraryItem'
import { LineProps } from './internals/Line'

export type ConnectionProps = LineProps &
  Readonly<{
    label: string
  }>

export const Connection = ({ prevLine, nextLine, label }: ConnectionProps) => (
  <ItineraryItem prevLine={prevLine} nextLine={nextLine} bullet={null}>
    <StyledConnection>
      <ConnectionIcon />
      {label}
    </StyledConnection>
  </ItineraryItem>
)
