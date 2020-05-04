import React, { Fragment } from 'react'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import HourglassIcon from 'icon/hourglassIcon'
import ItemChoice from 'itemChoice'
import LayoutNormalizer from 'layout/layoutNormalizer'
import Section from 'layout/section/baseSection'
import TheVoice from 'theVoice'
import TripCard from 'tripCard'

const stories = storiesOf('Pages|Your rides/Rides', module)

const createRideCardConfig = () => ({
  href: '/',
  itinerary: [
    {
      mainLabel: 'Paris',
    },
    {
      mainLabel: 'Bordeaux',
    },
  ],
  metaUrl: 'Meta URL',
  title: 'Sun march 8th, 18:00',
  passengers: [
    {
      avatarUrl: 'https://cdn.blablacar.com/comuto3/images/avatar/pixar/passenger-m-02.svg',
      firstName: 'Roger',
      ratings: 'sdfdsf',
    },
    {
      avatarUrl: 'https://cdn.blablacar.com/comuto3/images/avatar/pixar/passenger-m-02.svg',
      firstName: 'Roger',
      ratings: 'sdfdsf',
    },
  ],
  statusInformation: {
    icon: <HourglassIcon />,
    text: "Awaiting driver's approval",
    highlighted: false,
  },
})

stories.add('Default', () => (
  <Fragment>
    <LayoutNormalizer useLegacyNormalization={boolean('Use legacy normalization', false)} />

    <Section>
      <TheVoice>Your rides</TheVoice>
      <TripCard {...createRideCardConfig()} />
      <TripCard {...createRideCardConfig()} statusInformation={null} />
      <TripCard {...createRideCardConfig()} passengers={null} />
      <ItemChoice label="Ride history" href="#" />
    </Section>
  </Fragment>
))
