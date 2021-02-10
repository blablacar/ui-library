import styled from 'styled-components'

import { normalizeHorizontally } from '../layout/layoutNormalizer'
import { ItineraryProps } from './Itinerary'

export const StyledItinerary = styled.div<ItineraryProps>`
  > ul {
    list-style: none;
  }

  // On li for now, but it probably need to be on <button> or <a>
  // to have a proper hover on the clickable element
  > ul > li {
    ${normalizeHorizontally};
  }

  time {
    width: 52px;
    display: ${(props: ItineraryProps) => props.small ? 'none' : 'initial'};
  }
`
