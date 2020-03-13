import React from 'react'

import { storiesOf } from '@storybook/react'
import { boolean, text, withKnobs, number } from '@storybook/addon-knobs'
import Section from 'layout/section/baseSection'
import WarningIcon from 'icon/warningIcon'
import TripCard from './index'
import specs from './specifications/index.md'

const stories = storiesOf('Widgets|TripCard', module)
stories.addDecorator(withKnobs)

const tripCardConfig = () => ({
  ariaLabel: text(
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
    maxTwo: boolean('Max 2 in the back', true),
    autoApproval: boolean('Auto approval', true),
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
