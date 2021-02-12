import styled from 'styled-components'

import { color } from '../../_utils/branding'
import { ITINERARY_ITEM_BASE_HEIGHT } from '../Itinerary.style'

export const StyledItineraryItem = styled.li`
  min-height: ${ITINERARY_ITEM_BASE_HEIGHT}px;

  > div,
  > a {
    display: flex;
  }

  a {
    -webkit-tap-highlight-color: ${color.tapHighlight};
    -webkit-touch-callout: none;

    &:hover {
      background-color: ${color.tapHighlight};
    }
  }
`
