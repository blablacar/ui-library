import styled from 'styled-components'

import { space } from '../_utils/branding'
import { normalizeHorizontally } from '../layout/layoutNormalizer'
import { ItineraryProps } from './Itinerary'

export const StyledItinerary = styled.div<ItineraryProps>`
  > ul {
    list-style: none;
  }

  // On li sub-element to have a proper hover on clickable elements
  > ul > li > * {
    ${normalizeHorizontally};
  }

  time {
    width: 52px;
    padding-top: ${space.m};
    display: ${(props: ItineraryProps) => props.small ? 'none' : 'initial'};
  }
`
