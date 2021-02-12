import styled from 'styled-components'

import { space } from '../_utils/branding'
import { normalizeHorizontally } from '../layout/layoutNormalizer'
import { ItineraryProps } from './Itinerary'

export const ITINERARY_ITEM_BASE_HEIGHT = 32
const ITINERARY_TIME_WIDTH = '48px'

export const StyledItinerary = styled.div<ItineraryProps>`
  // On li sub-element to have a proper hover on clickable elements
  > ul > li > * {
    ${normalizeHorizontally};
  }

  // Used to display the left column. Elements without time also have this empty tag to help with the layout
  time {
    width: ${ITINERARY_TIME_WIDTH};
    padding-top: ${space.m};
    display: ${({ small }) => (small ? 'none' : 'initial')};
  }
`
