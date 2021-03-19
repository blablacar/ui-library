import React from 'react'

import { Address, Itinerary } from '../../../newItinerary'

export const tripCardConfig = {
  href: '/',
  itinerary: (
    <Itinerary>
      <Address label="Paris" subLabel="Porte de Vincennes" time="09:00" />
      <Address label="Bordeaux" subLabel="Gare Bordeaux Saint-Jean" time="12:00" />
    </Itinerary>
  ),
  price: '8,00€',
  flags: {
    ladiesOnly: true,
    maxTwo: true,
    autoApproval: true,
  },
  title: '',
}
