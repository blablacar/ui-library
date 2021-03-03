import React from 'react'

import { WarningIcon } from '../icon/warningIcon'
import { Address, Itinerary } from '../newItinerary'
import { TripCard } from '.'

// Needs to be outside of the .mdx file, cause the parser changes object types
// and mess with the iti display
const itinerary = (
  <Itinerary>
    <Address label="Paris" subLabel="Porte de Vincennes" time="09:00" />
    <Address label="Bordeaux" subLabel="Gare Bordeaux Saint-Jean" time="12:00" />
  </Itinerary>
)

export const TripCardExample = () => (
  <TripCard
    aria-label="Pick-up point: Paris, Drop-off point: Bordeaux, Departure time: 09:00, warning"
    href="/"
    itinerary={itinerary}
    price="8,00€"
    flags={{
      ladiesOnly: true,
      aloneInTheBack: true,
      maxTwo: true,
      autoApproval: true,
    }}
    titles={{
      ladiesOnly: 'Ladies Only',
      aloneInTheBack: 'Alone in the back',
      maxTwo: 'Max 2 in the back',
      autoApproval: 'Auto approval',
    }}
    statusInformation={{
      icon: <WarningIcon />,
      text: 'Warning',
      highlighted: false,
    }}
    badge="The Closest"
    title="Sun march 8th, 18:00"
    driver={{
      avatarUrl: '//placehold.it/500x500',
      firstName: 'Jane',
      rating: '4.9',
    }}
  />
)
