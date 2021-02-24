import styled from 'styled-components'

import { responsiveBreakpoints, space } from '../_utils/branding'
import { normalizeHorizontally } from '../layout/layoutNormalizer'

export const StyledSpecialOffer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${space.m};
`

export const StyledSpecialOfferContent = styled.div`
  flex: 1;
  align-items: flex-start;
  min-width: 100%;

  @media (${responsiveBreakpoints.isMediaLarge}) {
    min-width: auto;
  }
`

export const StyledSpecialOfferFigure = styled.figure`
  width: 70%;
  padding-top: ${space.xl};
  padding-bottom: ${space.m};
  margin: 0;

  ${normalizeHorizontally}
`

export const StyledSpecialOfferText = styled.div`
  margin-bottom: ${space.xl};
`

export const StyledSpecialOfferButtons = styled.div`
  @media (${responsiveBreakpoints.isMediaSmall}) {
    text-align: center;
  }
`

export const StyledSpecialOfferButton = styled.div`
  margin: 0 ${space.m} ${space.m} ${space.m};

  @media (${responsiveBreakpoints.isMediaLarge}) {
    display: inline-block;
  }
`
