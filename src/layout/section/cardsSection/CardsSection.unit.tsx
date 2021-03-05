import React from 'react'
import { mount } from 'enzyme'

import { Address, Itinerary } from '../../../newItinerary'
import { TripCard } from '../../../tripCard'
import { CardsSection } from './CardsSection'

const tripCardConfig = {
  'aria-label': 'Pick-up point: Paris, Drop-off point: Bordeaux, Departure time: 09:00, warning',
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
  badge: 'Cheapest',
  title: '',
}

describe('CardsSection component', () => {
  it('Should render as many TripCards as passed', () => {
    const wrapper = mount(
      <CardsSection>
        <TripCard {...tripCardConfig} />
        <TripCard {...tripCardConfig} />
        <TripCard {...tripCardConfig} />
      </CardsSection>,
    )
    expect(wrapper.find(TripCard).length).toEqual(3)
  })
})
