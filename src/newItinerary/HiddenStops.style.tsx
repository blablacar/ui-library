import styled from 'styled-components'

import { color, space, transition } from '../_utils/branding'
import { TextBody } from '../typography/body'
import { ITINERARY_ITEM_BASE_HEIGHT } from './Itinerary.style'

export const StyledHiddenStops = styled.li<{ stops: number }>`
  min-height: ${ITINERARY_ITEM_BASE_HEIGHT}px;

  ul {
    overflow: hidden;
    // Each stop has the same height. We need to compute the final height to have a proper animation
    height: ${props =>
      props['aria-expanded'] ? `${props.stops * ITINERARY_ITEM_BASE_HEIGHT}px` : '0'};
    transition: height ${transition.duration.base} ease-in-out;
  }

  > div {
    display: ${props => (props['aria-expanded'] ? 'none' : 'flex')};
  }
`

export const StyledWrapper = styled.div`
  display: flex;
`

export const StyledStopsCount = styled(TextBody)`
  background: transparent;
  padding: ${space.m} 0;
  color: ${color.blue};
  cursor: pointer;
`
