import React from 'react'
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { WarningIcon } from '../icon/warningIcon'
import { BaseSection as Section } from '../layout/section/baseSection'
import { TripCard } from './index'
import specs from './specifications/index.md'

const stories = storiesOf('Widgets|TripCard', module)
stories.addDecorator(withKnobs)

const tripCardConfig = () => ({
  'aria-label': text(
    'aria-label',
    'Pick-up point: Paris, Drop-off point: Bordeaux, Departure time: 09:00, warning',
  ),
  href: '/',
  itinerary: [
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
  ],
  price: text('Price', '8,00€'),
  flags: {
    ladiesOnly: boolean('Ladies only', true),
    aloneInTheBack: boolean('Alone in the back', true),
    maxTwo: boolean('Max 2 in the back', true),
    autoApproval: boolean('Auto approval', true),
  },
  titles: {
    ladiesOnly: text('Flag title for Ladies only', 'Ladies Only'),
    aloneInTheBack: text('Flag title for Alone in the back', 'Alone in the back'),
    maxTwo: text('Flag title for Max 2 in the back', 'Max 2 in the back'),
    autoApproval: text('Flag title for Auto approval', 'Auto approval'),
  },
  metaUrl: text('Meta URL'),
  statusInformation: boolean('Status information', true)
    ? {
        icon: <WarningIcon />,
        text: 'Warning',
        highlighted: boolean('Status information highlighted', false),
      }
    : undefined,
  badge: boolean('Badge', false) ? 'The Closest' : null,
  title: boolean('Show title', false) ? text('Title', 'Sun march 8th, 18:00') : null,
})

stories.add(
  'with driver',
  () => (
    <Section>
      <TripCard
        {...tripCardConfig()}
        driver={{
          avatarUrl: '//placehold.it/500x500',
          firstName: text('Driver name', 'Jane'),
          rating: text('Driver Rating', '4.9'),
        }}
      />
    </Section>
  ),
  {
    readme: { content: specs },
  },
)

stories.add('with passengers', () => (
  <Section>
    <TripCard
      {...tripCardConfig()}
      passengers={Array(number('passengers count', 3)).fill({
        avatarUrl: '//placehold.it/500x500',
        firstName: 'Jane',
      })}
    />
  </Section>
))
