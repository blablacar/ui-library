import React, { Fragment } from 'react'

import { BanIcon } from '../../../icon/banIcon'
import { HourglassIcon } from '../../../icon/hourglassIcon'
import { StarIcon } from '../../../icon/starIcon'
import { ItemChoice } from '../../../itemChoice'
import { LayoutNormalizer } from '../../../layout/layoutNormalizer'
import { BaseSection } from '../../../layout/section/baseSection'
import { Address, Itinerary } from '../../../newItinerary'
import { TheVoice } from '../../../theVoice'
import { TripCard } from '../../../tripCard'

const createRideCardConfig = () => ({
  href: '/',
  itinerary: (
    <Itinerary small>
      <Address label="Paris" />
      <Address label="Bordeaux" />
    </Itinerary>
  ),
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

export const Rides = (): JSX.Element => (
  <Fragment>
    <LayoutNormalizer useLegacyNormalization={false} />

    <BaseSection noHorizontalSpacing>
      <TheVoice>Your rides</TheVoice>
    </BaseSection>
    <BaseSection>
      <TripCard {...createRideCardConfig()} />
      <TripCard {...createRideCardConfig()} statusInformation={null} />
      <TripCard {...createRideCardConfig()} passengers={null} />
      <ItemChoice label="Ride history" href="#" />
    </BaseSection>
  </Fragment>
)

const createRideHistoryCardConfig = () => ({
  href: '/',
  itinerary: (
    <Itinerary small>
      <Address label="Paris" />
      <Address label="Bordeaux" />
    </Itinerary>
  ),
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

export const RidesHistory = (): JSX.Element => (
  <Fragment>
    <LayoutNormalizer useLegacyNormalization={false} />

    <BaseSection noHorizontalSpacing>
      <TheVoice>Ride history</TheVoice>
    </BaseSection>
    <BaseSection>
      <TripCard {...createRideHistoryCardConfig()} statusInformation={cancelledStatusInformation} />
      <TripCard {...createRideHistoryCardConfig()} statusInformation={ratingStatusInformation} />
      <TripCard {...createRideHistoryCardConfig()} />
    </BaseSection>
  </Fragment>
)
