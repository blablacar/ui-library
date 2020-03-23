import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import CardsSection from 'layout/section/cardsSection'
import TripCard from 'tripCard'
import QrCard from 'qrCard'

const stories = storiesOf('Sections|CardsSection', module)
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

stories.add('CardsSection - default', () => (
  <CardsSection>
    <TripCard {...tripCardConfig} />
    <TripCard
      {...tripCardConfig}
      driver={{
        avatarUrl: '//placehold.it/500x500',
        firstName: 'Jane',
      }}
      badge="Closest"
    />
  </CardsSection>
))

stories.add('CardsSection - 4 trip cards', () => (
  <CardsSection>
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
  </CardsSection>
))

const qrUrl =
  'https://www.textencode.com/create-qr-code/qr-generator/qrcodesticker79f6448652f32311241f5992bd184e22.png'

stories.add('CardsSection - 3 Qr cards', () => (
  <CardsSection>
    <QrCard
      title="Jack Jones Dupont"
      imageUrl={qrUrl}
      itemMainTitle="1st class"
      itemMainInfo="Your seat number will be assigned to you 1 hour before departure."
    />
    <QrCard
      title="Michael Jones"
      imageUrl={qrUrl}
      itemMainTitle="1st class"
      itemMainInfo="Seat n°22"
    />
    <QrCard
      title="Johnny Perry Jones Tony Longname"
      imageUrl={qrUrl}
      itemMainTitle="1st class"
      itemMainInfo="Seat n°21"
    />
  </CardsSection>
))
