import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'

import TripCard from 'tripCard'

const stories = storiesOf('TripCard', module)
stories.addDecorator(withKnobs)

stories.add(
  'TripCard',
  withInfo('')(() => (
    <TripCard
      href="/"
      itinerary={[
        {
          mainLabel: text('Departure city', 'Paris'),
          subLabel: text('Departure precise', 'Porte de Vincennes'),
          time: text('Departure time', '09:00'),
          isoDate: '2017-12-11T09:00',
          distanceFromPoint: '1,5km',
        },
        {
          mainLabel: text('Arrival city', 'Bordeaux'),
          subLabel: text('Arrival precise', 'Gare Bordeaux Saint-Jean'),
          time: text('Arrival time', '12:00'),
          isoDate: '2017-12-11T12:00',
          distanceFromPoint: '8km',
        },
      ]}
      driver={{
        avatarUrl: '//placehold.it/500x500',
        firstName: text('Driver name', 'Jane'),
      }}
      price={text('Price', '8,00€')}
      flags={{
        ladiesOnly: boolean('Ladies only', true),
        maxTwo: boolean('Max 2 in the back', true),
        autoApproval: boolean('Auto approval', true),
      }}
      highlighted={boolean('Top of search', false) ? 'Closest match' : ''}
      metaUrl={text('Meta URL')}
    />
  )),
)
