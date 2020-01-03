import React from 'react'

import { storiesOf } from '@storybook/react'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'

import Itinerary from 'itinerary'
import Proximity from 'proximity'

const stories = storiesOf('Itinerary', module)
stories.addDecorator(withKnobs)

const places = [
  {
    time: '09:00',
    isoDate: '2017-12-11T09:00',
    stepAriaLabel: 'Pickup location',
    subLabel: 'Porte de Vincennes',
    mainLabel: 'Paris',
    actionAriaLabel: '09:00 Paris Porte de Vincennes (New page with a map)',
    href: '#',
  },
  {
    time: '15:00',
    isoDate: '2017-12-11T15:00',
    stepAriaLabel: 'Dropoff location',
    subLabel: 'Gare Bordeaux Saint-Jean',
    mainLabel: 'Bordeaux',
  },
]

const placesWithStopover = [
  {
    time: '09:00',
    stepAriaLabel: 'Pickup location',
    isoDate: '2017-12-11T09:00',
    subLabel: 'Porte de Vincennes',
    mainLabel: 'Paris',
    actionAriaLabel: '09:00 Paris Porte de Vincennes (New page with a map)',
    href: '#',
  },
  {
    time: '12:00',
    isoDate: '2017-12-11T12:00',
    stepAriaLabel: 'Pick up/drop off location',
    subLabel: 'Gare de Tours',
    mainLabel: 'Tours',
    actionAriaLabel: '09:00 Paris Porte de Vincennes (New page with a map)',
    href: '#',
  },
  {
    time: '15:00',
    isoDate: '2017-12-11T15:00',
    stepAriaLabel: 'Pick up/drop off location',
    mainLabel: 'Nogent-le-Rotrou',
    actionAriaLabel: '09:00 Paris Porte de Vincennes (New page with a map)',
    href: '#',
  },
  {
    time: '19:00',
    isoDate: '2017-12-11T19:00',
    stepAriaLabel: 'Pick up/drop off location',
    subLabel: 'Gare Bordeaux Saint-Jean',
    mainLabel: 'Bordeaux',
  },
]

stories.add('default', () => {
  const ariaLabelledBy = text('ariaLabelledBy', 'titleId')
  const fromAddon = text('From addon', 'Lille')
  const fromAddonLabel = text('From addon label', 'Driver departure')
  const toAddon = text('To addon', 'Biarritz')
  const toAddonLabel = text('To addon label', 'Driver arrival')
  const headline = text('Headline', 'Mon 11 December')
  const isStopover = boolean('Stopover', false)
  return (
    <div>
      <h1 id="titleId">Title example</h1>
      <Itinerary
        ariaLabelledBy={ariaLabelledBy}
        fromAddon={fromAddon}
        fromAddonAriaLabel={fromAddonLabel}
        toAddon={toAddon}
        toAddonAriaLabel={toAddonLabel}
        places={isStopover ? placesWithStopover : places}
        small={boolean('small', false)}
        headline={headline}
      />
    </div>
  )
})

stories.add('with proximity', () => {
  const Distances = ['NONE', 'CLOSE', 'MIDDLE', 'FAR']
  const fromAddon = text('From addon', 'Lille')
  const fromAddonLabel = text('From addon label', 'Driver departure')
  const toAddon = text('To addon', 'Biarritz')
  const toAddonLabel = text('To addon label', 'Driver arrival')
  const headline = text('Headline', 'Mon 11 December')
  return (
    <Itinerary
      fromAddon={fromAddon}
      fromAddonAriaLabel={fromAddonLabel}
      toAddon={toAddon}
      toAddonAriaLabel={toAddonLabel}
      places={[
        {
          stepAriaLabel: text('Step label from', 'Pick up location'),
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
          stepAriaLabel: text('Step label from', 'Drop off location'),
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
      headline={headline}
    />
  )
})

stories.add('with stopovers', () => {
  const ariaLabel = text('ariaLabel', 'Ride plan')
  const fromAddon = text('From addon', 'Lille')
  const fromAddonLabel = text('From addon label', 'Driver departure')
  const toAddon = text('To addon', 'Biarritz')
  const toAddonLabel = text('To addon label', 'Driver arrival')
  const headline = text('Headline', 'Mon 11 December')
  return (
    <Itinerary
      ariaLabel={ariaLabel}
      fromAddon={fromAddon}
      fromAddonAriaLabel={fromAddonLabel}
      toAddon={toAddon}
      toAddonAriaLabel={toAddonLabel}
      places={placesWithStopover}
      small={boolean('small', false)}
      headline={headline}
    />
  )
})

stories.add('with button tiles', () => {
  const fromAddon = text('From addon', 'Lille')
  const toAddon = text('To addon', 'Biarritz')
  const headline = text('Headline', 'Mon 11 December')
  const placesWithButton = [
    {
      time: '09:00',
      isoDate: '2017-12-11T09:00',
      subLabel: 'Porte de Vincennes',
      mainLabel: 'Paris',
      href: <button type="button" />,
    },
    {
      time: '15:00',
      isoDate: '2017-12-11T15:00',
      subLabel: 'Gare Bordeaux Saint-Jean',
      mainLabel: 'Bordeaux',
    },
    {
      time: '12:00',
      isoDate: '2017-12-11T12:00',
      subLabel: 'Gare de Tours',
      mainLabel: 'Tours',
      href: <button type="button" />,
    },
  ]
  return (
    <Itinerary
      fromAddon={fromAddon}
      toAddon={toAddon}
      places={placesWithButton}
      small={boolean('small', false)}
      headline={headline}
    />
  )
})

stories.add('without time', () => {
  const fromAddon = text('From addon', 'Lille')
  const toAddon = text('To addon', 'Biarritz')
  const headline = text('Headline', 'Mon 11 December')
  const placesWithButton = [
    {
      isoDate: '2017-12-11T09:00',
      subLabel: 'Porte de Vincennes',
      mainLabel: 'Paris',
    },
    {
      isoDate: '2017-12-11T15:00',
      subLabel: 'Gare Bordeaux Saint-Jean',
      mainLabel: 'Bordeaux',
    },
  ]
  return (
    <Itinerary
      fromAddon={fromAddon}
      toAddon={toAddon}
      places={placesWithButton}
      small={false}
      headline={headline}
    />
  )
})
