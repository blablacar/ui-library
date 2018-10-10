import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { boolean, selectV2, text, withKnobs } from '@storybook/addon-knobs'

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
  },
  {
    time: '12:00',
    isoDate: '2017-12-11T12:00',
    subLabel: 'Gare de Tours',
    mainLabel: 'Tours',
  },
  {
    time: '15:00',
    isoDate: '2017-12-11T15:00',
    subLabel: 'Gare Bordeaux Saint-Jean',
    mainLabel: 'Bordeaux',
  },
]

stories.add(
  'default',
  withInfo('')(() => {
    const isFromAddon = boolean('top addon', false)
    const isToAddon = boolean('bottom addon', false)
    const isHeadline = boolean('Headline', false)
    const isStopover = boolean('Stopover', false)
    return (
      <Itinerary
        fromAddon={isFromAddon ? 'Lille' : null}
        toAddon={isToAddon ? 'Biarritz' : null}
        places={isStopover ? placesWithStopover : places}
        small={boolean('small', false)}
        headline={isHeadline && 'Mon 11 December'}
      />
    )
  }),
)

stories.add(
  'with proximity',
  withInfo('')(() => {
    const Distances = ['NONE', 'CLOSE', 'MIDDLE', 'FAR']
    const isFromAddon = boolean('Distance from', false)
    const isToAddon = boolean('Distance to', false)
    const isHeadline = boolean('Headline', false)
    return (
      <Itinerary
        fromAddon={isFromAddon}
        toAddon={isToAddon}
        places={[
          {
            mainLabel: text('Main label from', 'Paris'),
            subLabel: <Proximity
              value={selectV2('Proximity from', Distances, 'FAR')}
              title="Distance from the pick up point"
            />,
            isoDate: '2017-12-11T09:00',
            distanceFromPoint: isFromAddon && '1,5km',
            time: text('Time from', '09:00'),
          },
          {
            mainLabel: text('Main label to', 'Bordeaux'),
            subLabel: <Proximity
              value={selectV2('Proximity to', Distances, 'CLOSE')}
              title="Distance from the drop off point"
            />,
            isoDate: '2017-12-11T12:00',
            distanceFromPoint: isToAddon && '8km',
            time: text('Time to', '12:00'),
          },
        ]}
        small={boolean('small', false)}
        headline={isHeadline && 'Mon 11 December'}
      />
    )
  }),
)
