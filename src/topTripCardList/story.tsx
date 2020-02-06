import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import TopTripCardList from 'topTripCardList'
import TripCard from 'tripCard'

const stories = storiesOf('Widgets|TopTripCardList', module)
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

stories.add('TopTripCardList - default', () => (
  <TopTripCardList isWrapped={boolean('isWrapped', false)}>
    <TripCard {...tripCardConfig} />
    <TripCard
      {...tripCardConfig}
      driver={{
        avatarUrl: '//placehold.it/500x500',
        firstName: 'Jane',
      }}
      badge="Closest"
    />
  </TopTripCardList>
))

stories.add('TopTripCardList - 4 trip cards', () => (
  <TopTripCardList isWrapped={boolean('isWrapped', false)}>
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
  </TopTripCardList>
))
