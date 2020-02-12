import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import TripsSection from 'layout/section/tripsSection'
import TripCard from 'tripCard'

const stories = storiesOf('Sections|TripsSection', module)
stories.addDecorator(withKnobs)

const tripCardConfig = {
  ariaLabel: 'Pick-up point: Paris, Drop-off point: Bordeaux, Departure time: 09:00, warning',
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

stories.add('TripsSection - default', () => (
  <TripsSection>
    <TripCard {...tripCardConfig} />
    <TripCard
      {...tripCardConfig}
      driver={{
        avatarUrl: '//placehold.it/500x500',
        firstName: 'Jane',
      }}
      badge="Closest"
    />
  </TripsSection>
))

stories.add('TripsSection - 4 trip cards', () => (
  <TripsSection>
    <TripCard {...tripCardConfig} />
    <TripCard
      {...tripCardConfig}
      driver={{
        avatarUrl: '//placehold.it/500x500',
        firstName: 'Jane',
      }}
      badge="Closest"
    />
    <TripCard {...tripCardConfig} />
    <TripCard
      {...tripCardConfig}
      driver={{
        avatarUrl: '//placehold.it/500x500',
        firstName: 'Jane',
      }}
      badge="Closest"
    />
  </TripsSection>
))
