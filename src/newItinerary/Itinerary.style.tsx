import styled from 'styled-components'

import { space } from '../_utils/branding'
import { normalizeHorizontally } from '../layout/layoutNormalizer'
import { ItineraryProps } from './Itinerary'

const TIME_WIDTH = '52px'

export const StyledItinerary = styled.div<ItineraryProps>`
  // On li sub-element to have a proper hover on clickable elements
  > ul > li > * {
    ${normalizeHorizontally};
  }

  // Used to display the left column. Elements without time also have this empty tag to help with the layout
  time {
    width: ${TIME_WIDTH};
    padding-top: ${space.m};
    display: ${(props: ItineraryProps) => props.small ? 'none' : 'initial'};
  }
`
