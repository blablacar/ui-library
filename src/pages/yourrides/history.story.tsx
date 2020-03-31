import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import TripCard from 'tripCard'
import Section from 'layout/section/baseSection'
import BanIcon from 'icon/banIcon'
import StarIcon from 'icon/starIcon'
import TheVoice from 'theVoice'

import LayoutNormalizer from 'layout/layoutNormalizer'

const stories = storiesOf('Pages|Your rides/History', module)

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
})

const ratingStatusInformation = {
  icon: <StarIcon />,
  text: 'Leave a rating',
  highlighted: true,
}

const cancelledStatusInformation = {
  icon: <BanIcon />,
  text: 'Cancelled',
  highlighted: false,
}

stories.add('Default', () => (
  <Fragment>
    <LayoutNormalizer useLegacyNormalization={boolean('Use legacy normalization', false)} />

    <Section>
      <TheVoice>Ride history</TheVoice>
      <TripCard {...createRideCardConfig()} statusInformation={cancelledStatusInformation} />
      <TripCard {...createRideCardConfig()} statusInformation={ratingStatusInformation} />
      <TripCard {...createRideCardConfig()} />
    </Section>
  </Fragment>
))
