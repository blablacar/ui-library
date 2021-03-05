import React from 'react'

import { render, screen } from '@testing-library/react'

import { Address, Itinerary } from '../../../newItinerary'
import { TripCard } from '../../../tripCard'
import { CardsGridSection } from './CardsGridSection'

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

describe('CardsGridSection component', () => {
  it('Should render as many TripCards as passed', () => {
    render(
      <CardsGridSection>
        <TripCard {...tripCardConfig} />
        <TripCard {...tripCardConfig} />
        <TripCard {...tripCardConfig} />
      </CardsGridSection>,
    )
    expect(screen.getAllByText('Porte de Vincennes')).toHaveLength(3)
  })

  it('Should render with a title', () => {
    render(
      <CardsGridSection title="Section title">
        <TripCard {...tripCardConfig} />
      </CardsGridSection>,
    )
    expect(screen.getByRole('heading', { name: 'Section title' })).toBeInTheDocument()
  })

  it('Should render with a button', () => {
    render(
      <CardsGridSection buttonTitle="Section button" buttonHref="/">
        <TripCard {...tripCardConfig} />
      </CardsGridSection>,
    )
    expect(screen.getByRole('link', { name: 'Section button' })).toBeInTheDocument()
  })
})
