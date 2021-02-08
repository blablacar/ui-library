import React from 'react'

import { TheVoice } from '../theVoice'
import { StyledItinerary } from './Itinerary.style'

export enum Lines {
  NONE = 'none',
  INACTIVE = '#DDD',
  ACTIVE = '#054752',
}

export type ItineraryProps = Readonly<{
  children: React.ReactNode
  headline?: string
}>

export const Itinerary = ({ children, headline }: ItineraryProps) => (
  <StyledItinerary>
    {headline && <TheVoice>{headline}</TheVoice>}
    {children}
  </StyledItinerary>
)
