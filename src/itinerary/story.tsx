import React from 'react'

import { storiesOf } from '@storybook/react'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import Section from 'layout/section/baseSection'
import Itinerary from 'itinerary'
import Proximity, { Distances } from 'proximity'

const stories = storiesOf('Widgets|Itinerary', module)
stories.addDecorator(withKnobs)

const places = [
  {
    time: '09:00',
    isoDate: '2017-12-11T09:00',
    stepAriaLabel: 'Pickup location',
    mainLabel: 'Porte de Vincennes',
    subLabel: 'Paris',
    actionAriaLabel: '09:00 Paris Porte de Vincennes (New page with a map)',
    href: '#',
  },
  {
    time: '15:00',
    isoDate: '2017-12-11T15:00',
    stepAriaLabel: 'Dropoff location',
    mainLabel: 'Gare Bordeaux Saint-Jean',
    subLabel: 'Bordeaux',
  },
]
const placesWithOneStopover = [
  {
    time: '09:00',
    stepAriaLabel: 'Pickup location',
    isoDate: '2017-12-11T09:00',
    mainLabel: 'Porte de Vincennes',
    subLabel: 'Paris',
    actionAriaLabel: '09:00 Paris Porte de Vincennes (New page with a map)',
    href: '#',
  },
  {
    time: '12:00',
    isoDate: '2017-12-11T12:00',
    stepAriaLabel: 'Pick up/drop off location',
    mainLabel: 'Gare de Tours',
    subLabel: 'Tours',
    actionAriaLabel: '09:00 Paris Porte de Vincennes (New page with a map)',
    href: '#',
  },
  {
    time: '19:00',
    isoDate: '2017-12-11T19:00',
    stepAriaLabel: 'Pick up/drop off location',
    mainLabel: 'Gare Bordeaux Saint-Jean',
    subLabel: 'Bordeaux',
  },
]

const placesWithStopovers = [
  {
    time: '09:00',
    stepAriaLabel: 'Pickup location',
    isoDate: '2017-12-11T09:00',
    mainLabel: 'Porte de Vincennes',
    subLabel: 'Paris',
    actionAriaLabel: '09:00 Paris Porte de Vincennes (New page with a map)',
    href: '#',
  },
  {
    time: '12:00',
    isoDate: '2017-12-11T12:00',
    stepAriaLabel: 'Pick up/drop off location',
    mainLabel: 'Gare de Tours',
    subLabel: 'Tours',
    actionAriaLabel: '09:00 Paris Porte de Vincennes (New page with a map)',
    href: '#',
  },
  {
    time: '15:00',
    isoDate: '2017-12-11T15:00',
    stepAriaLabel: 'Pick up/drop off location',
    mainLabel: 'Gare',
    subLabel: 'Nogent-le-Rotrou',
    actionAriaLabel: '09:00 Paris Porte de Vincennes (New page with a map)',
    href: '#',
  },
  {
    time: '19:00',
    isoDate: '2017-12-11T19:00',
    stepAriaLabel: 'Pick up/drop off location',
    mainLabel: 'Gare Bordeaux Saint-Jean',
    subLabel: 'Bordeaux',
  },
]

stories.add('default', () => {
  const ariaLabelledBy = text('ariaLabelledBy', 'titleId')
  const fromAddon = text('From addon', 'Lille')
  const fromAddonLabel = text('From addon label', 'Driver departure')
  const toAddon = text('To addon', 'Biarritz')
  const toAddonLabel = text('To addon label', 'Driver arrival')
  const headline = text('Headline', 'Mon 11 December')
  const placesSelect = select(
    'Stopover',
    {
      default: places,
      withOneStopover: placesWithOneStopover,
      withMultipleStopovers: placesWithStopovers,
    },
    placesWithOneStopover,
  )
  const highlightRoad = boolean('Highlight road', true)
  return (
    <Section>
      <h1 id="titleId">Title example</h1>
      <Itinerary
        ariaLabelledBy={ariaLabelledBy}
        fromAddon={fromAddon}
        fromAddonAriaLabel={fromAddonLabel}
        toAddon={toAddon}
        toAddonAriaLabel={toAddonLabel}
        places={placesSelect}
        small={boolean('small', false)}
        headline={headline}
        highlightRoad={highlightRoad}
        isCollapsible={boolean('isCollapsible', false)}
        collapsedLabel={text('collapsed label', `${placesWithStopovers.length} stops`)}
        collapsedAriaLabel={text('collapsed aria label', 'Show or hide all stops')}
      />
    </Section>
  )
})

stories.add('with proximity', () => {
  const fromAddon = text('From addon', 'Lille')
  const fromAddonLabel = text('From addon label', 'Driver departure')
  const toAddon = text('To addon', 'Biarritz')
  const toAddonLabel = text('To addon label', 'Driver arrival')
  const headline = text('Headline', 'Mon 11 December')
  const highlightRoad = boolean('Highlight road', true)
  return (
    <Section>
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
                value={select('Proximity from', Distances, Distances.FAR)}
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
                value={select('Proximity to', Distances, Distances.CLOSE)}
                title="Distance from the drop off point"
              />
            ),
            isoDate: '2017-12-11T12:00',
            time: text('Time to', '12:00'),
          },
        ]}
        small={boolean('small', false)}
        headline={headline}
        highlightRoad={highlightRoad}
      />
    </Section>
  )
})

stories.add('with stopovers', () => {
  const ariaLabel = text('ariaLabel', 'Ride plan')
  const fromAddon = text('From addon', 'Lille')
  const fromAddonLabel = text('From addon label', 'Driver departure')
  const toAddon = text('To addon', 'Biarritz')
  const toAddonLabel = text('To addon label', 'Driver arrival')
  const headline = text('Headline', 'Mon 11 December')
  const highlightRoad = boolean('Highlight road', true)
  return (
    <Itinerary
      ariaLabel={ariaLabel}
      fromAddon={fromAddon}
      fromAddonAriaLabel={fromAddonLabel}
      toAddon={toAddon}
      toAddonAriaLabel={toAddonLabel}
      places={placesWithStopovers}
      small={boolean('small', false)}
      headline={headline}
      highlightRoad={highlightRoad}
    />
  )
})

stories.add('with single stopover', () => {
  const fromAddon = text('From addon', 'Lille')
  const toAddon = text('To addon', 'Biarritz')
  const headline = text('Headline', 'Mon 11 December')
  const highlightRoad = boolean('Highlight road', true)
  const stops = [
    {
      time: '09:00',
      isoDate: '2017-12-11T09:00',
      subLabel: 'Porte de Vincennes',
      mainLabel: 'Paris',
    },
  ]

  return (
    <Section>
      <Itinerary
        fromAddon={fromAddon}
        toAddon={toAddon}
        places={stops}
        headline={headline}
        highlightRoad={highlightRoad}
      />
    </Section>
  )
})

stories.add('without time', () => {
  const fromAddon = text('From addon', 'Lille')
  const toAddon = text('To addon', 'Biarritz')
  const headline = text('Headline', 'Mon 11 December')
  const highlightRoad = boolean('Highlight road', true)
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
    <Section>
      <Itinerary
        fromAddon={fromAddon}
        toAddon={toAddon}
        places={placesWithButton}
        small={false}
        headline={headline}
        highlightRoad={highlightRoad}
      />
    </Section>
  )
})
