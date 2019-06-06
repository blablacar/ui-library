import React from 'react'

import { storiesOf } from '@storybook/react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'

import WarningIcon from 'icon/warningIcon'
import TripCard from 'tripCard'
import specs from './specifications/index.md'

const stories = storiesOf('TripCard', module)
stories.addDecorator(withKnobs)

stories.add('with driver', () => (
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
    statusInformation={boolean('Status information', true) ? {
      icon: <WarningIcon/>,
      text: 'Warning',
      highlighted: boolean('Status information highlighted', false),
    } : undefined}
    badge={boolean('Badge', false) ? 'The Closest' : null}
  />
), {
  readme: { content: specs }
})

stories.add('with passengers', () => (
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
    passengers={[
      {
        avatarUrl: '//placehold.it/500x500',
        firstName: 'Jane',
      },
      {
        avatarUrl: '//placehold.it/500x500',
        firstName: 'Bob',
      },
      {
        avatarUrl: '//placehold.it/500x500',
        firstName: 'Matthew',
      },
    ]}
    price={text('Price', '8,00€')}
    flags={{
      ladiesOnly: boolean('Ladies only', true),
      maxTwo: boolean('Max 2 in the back', true),
      autoApproval: boolean('Auto approval', true),
    }}
    highlighted={boolean('Top of search', false) ? 'Closest match' : ''}
    metaUrl={text('Meta URL')}
    statusInformation={boolean('Status information', false) ? {
      icon: <WarningIcon/>,
      text: 'Warning',
      highlighted: boolean('Status information highlighted', false),
    } : undefined}
    badge={boolean('Badge', true) ? 'The Closest' : null}
  />
))
