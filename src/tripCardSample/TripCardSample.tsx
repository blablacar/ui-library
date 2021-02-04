import React from 'react'

import { Place } from '../_utils/place'
import { Itinerary } from '../itinerary'
import {
  StyledPriceBlock,
  StyledPriceTextBody,
  StyledPriceTextSubHeaderStrong,
  StyledTripCardSample,
} from './TripCardSample.style'

export type TripCardSampleProps = Readonly<{
  departure: string
  arrival: string
  price?: string
  priceLabel?: string
}>

export const TripCardSample = (props: TripCardSampleProps) => {
  const { departure, arrival, price, priceLabel } = props

  const departurePlace: Place = { mainLabel: departure }
  const arrivalPlace: Place = { mainLabel: arrival }

  return (
    <StyledTripCardSample>
      <Itinerary places={[departurePlace, arrivalPlace]} />
      {price && (
        <StyledPriceBlock>
          {priceLabel && <StyledPriceTextBody>{priceLabel}</StyledPriceTextBody>}
          <StyledPriceTextSubHeaderStrong>{price}</StyledPriceTextSubHeaderStrong>
        </StyledPriceBlock>
      )}
    </StyledTripCardSample>
  )
}
