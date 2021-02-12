import React from 'react'

import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { ConnectionIcon } from '../icon/connectionIcon'
import { StyledConnection } from './Connection.style'
import { ItineraryItem } from './internals/ItineraryItem'
import { LineProps } from './internals/Line'

export type ConnectionProps = A11yProps &
  LineProps &
  Readonly<{
    label: string
  }>

export const Connection = ({ prevLine, nextLine, label, ...props }: ConnectionProps) => (
  <ItineraryItem prevLine={prevLine} nextLine={nextLine} bullet={null} {...pickA11yProps(props)}>
    <StyledConnection>
      <ConnectionIcon />
      {label}
    </StyledConnection>
  </ItineraryItem>
)
