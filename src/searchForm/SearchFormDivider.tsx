import styled from 'styled-components'

import { color, responsiveBreakpoints, space } from '../_utils/branding'
import { buttonHeight } from './SearchForm.style'

export const VerticalDivider = styled.hr`
  margin: 0;
  border: none;
  width: 1px;
  height: ${buttonHeight};
  background-color: ${color.lightGray};
`

// Horizontal on small screens, vertical on large ones.
export const ResponsiveDivider = styled.hr`
  margin: ${space.m} 0;
  border: none;
  height: 1px;
  background-color: ${color.lightGray};

  @media (${responsiveBreakpoints.isMediaLarge}) {
    width: 1px;
    height: ${buttonHeight};
    margin: 0;
  }
`
