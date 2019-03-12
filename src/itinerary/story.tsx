import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'

import Itinerary from 'itinerary'
import Proximity from 'proximity'

const stories = storiesOf('Itinerary', module)
stories.addDecorator(withKnobs)

const places = [
  {
    time: '09:00',
    isoDate: '2017-12-11T09:00',
    subLabel: 'Porte de Vincennes',
    mainLabel: 'Paris',
    href: '#',
  },
  {
    time: '15:00',
    isoDate: '2017-12-11T15:00',
    subLabel: 'Gare Bordeaux Saint-Jean',
    mainLabel: 'Bordeaux',
  },
]

const placesWithStopover = [
  {
    time: '09:00',
    isoDate: '2017-12-11T09:00',
    subLabel: 'Porte de Vincennes',
    mainLabel: 'Paris',
    href: '#',
  },
  {
    time: '12:00',
    isoDate: '2017-12-11T12:00',
    subLabel: 'Gare de Tours',
    mainLabel: 'Tours',
    href: <button type="button" />,
  },
  {
    time: '15:00',
    isoDate: '2017-12-11T15:00',
    subLabel: 'Gare Bordeaux Saint-Jean',
    mainLabel: 'Bordeaux',
  },
]

stories.add('default', () => {
  const fromAddonLabel = text('From addon label', 'Lille')
  const toAddonLabel = text('To addon label', 'Biarritz')
  const headlineLabel = text('Headline label', 'Mon 11 December')
  const isStopover = boolean('Stopover', false)
  return (
    <Itinerary
      fromAddon={fromAddonLabel}
      toAddon={toAddonLabel}
      places={isStopover ? placesWithStopover : places}
      small={boolean('small', false)}
      headline={headlineLabel}
    />
  )
})

stories.add('with proximity', () => {
  const Distances = ['NONE', 'CLOSE', 'MIDDLE', 'FAR']
  const fromAddonLabel = text('From addon label', 'Lille')
  const toAddonLabel = text('To addon label', 'Biarritz')
  const headlineLabel = text('Headline label', 'Mon 11 December')
  return (
    <Itinerary
      fromAddon={fromAddonLabel}
      toAddon={toAddonLabel}
      places={[
        {
          mainLabel: text('Main label from', 'Paris'),
          subLabel: (
            <Proximity
              value={select('Proximity from', Distances, 'FAR')}
              title="Distance from the pick up point"
            />
          ),
          isoDate: '2017-12-11T09:00',
          time: text('Time from', '09:00'),
          href: '#',
        },
        {
          mainLabel: text('Main label to', 'Bordeaux'),
          subLabel: (
            <Proximity
              value={select('Proximity to', Distances, 'CLOSE')}
              title="Distance from the drop off point"
            />
          ),
          isoDate: '2017-12-11T12:00',
          time: text('Time to', '12:00'),
        },
      ]}
      small={boolean('small', false)}
      headline={headlineLabel}
    />
  )
})
