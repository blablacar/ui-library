import React from 'react'

import { render, screen } from '@testing-library/react'

import { TripCard } from '../../../tripCard'
import { CardsGridSection } from './CardsGridSection'

const tripCardConfig = {
  'aria-label': 'Pick-up point: Paris, Drop-off point: Bordeaux, Departure time: 09:00, warning',
  href: '/',
  itinerary: [
    {
      mainLabel: 'Paris',
      subLabel: 'Porte de Vincennes',
      time: '09:00',
      isoDate: '2017-12-11T09:00',
      distanceFromPoint: '1,5km',
    },
    {
      mainLabel: 'Bordeaux',
      subLabel: 'Gare Bordeaux Saint-Jean',
      time: '12:00',
      isoDate: '2017-12-11T12:00',
      distanceFromPoint: '8km',
    },
  ],
  price: '8,00€',
  flags: {
    ladiesOnly: true,
    maxTwo: true,
    autoApproval: true,
  },
  metaUrl: 'Meta URL',
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
