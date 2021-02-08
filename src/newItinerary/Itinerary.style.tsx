import styled from 'styled-components'

import { normalizeHorizontally } from '../layout/layoutNormalizer'

export const StyledItinerary = styled.ul`
  list-style: none;
  margin: 0;

  // On li for now, but it probably need to be on <button> or <a>
  // to have a proper hover on the clickable element
  > li {
    ${normalizeHorizontally};
  }
`
