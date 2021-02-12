import styled from 'styled-components'

import { color } from '../../_utils/branding'
import { ITINERARY_ITEM_BASE_HEIGHT } from '../Itinerary.style'

export const StyledItineraryItem = styled.li<{ hasLink: boolean }>`
  min-height: ${ITINERARY_ITEM_BASE_HEIGHT}px;

  > * {
    display: flex;
  }

  ${({ hasLink }) =>
    hasLink &&
    `
    > * {
      -webkit-tap-highlight-color: ${color.tapHighlight};

      &:hover {
        background-color: ${color.tapHighlight};
      }
    }
  `};
`
