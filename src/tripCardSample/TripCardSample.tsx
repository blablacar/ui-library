import React from 'react'

import { Place } from '../_utils/place'
import { Itinerary } from '../itinerary'
import { TextBody } from '../typography/body'
import { TextSubHeaderStrong } from '../typography/subHeaderStrong'
import { StyledTripCardSample } from './TripCardSample.style'

export type TripCardSampleProps = Readonly<{
  departure: string
  arrival: string
  price?: string
  priceFromLabel?: string
}>

export const TripCardSample = (props: TripCardSampleProps) => {
  const { departure, arrival, price, priceFromLabel } = props

  const departurePlace: Place = { mainLabel: departure }
  const arrivalPlace: Place = { mainLabel: arrival }

  return (
    <StyledTripCardSample>
      <Itinerary places={[departurePlace, arrivalPlace]} />
      {price && (
        <div className="kirk-tripCardSample-price">
          {priceFromLabel && <TextBody>{priceFromLabel}</TextBody>}
          <TextSubHeaderStrong>{price}</TextSubHeaderStrong>
        </div>
      )}
    </StyledTripCardSample>
  )
}
