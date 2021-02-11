import styled from 'styled-components'

import { color } from '../../_utils/branding'

export const StyledItineraryItem = styled.li`
  min-height: 32px;

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
