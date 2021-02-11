import React from 'react'

import { TheVoice } from '../theVoice'
import { StyledItinerary } from './Itinerary.style'
import { NormalizeProps } from '../layout/layoutNormalizer'

export enum Lines {
  NONE = 'none',
  INACTIVE = 'inactive',
  ACTIVE = 'active',
  CONNECTION = 'connection',
  HIDDEN_STOPS = 'hidden_stops_top',
}

export type ItineraryProps = NormalizeProps & Readonly<{
  children: React.ReactNode[]
  headline?: string
  small?: boolean
}>

export const Itinerary = ({ children, headline, small = false }: ItineraryProps) => (
  <StyledItinerary small={small}>
    {headline && <TheVoice>{headline}</TheVoice>}
    <ul>{children}</ul>
  </StyledItinerary>
)
