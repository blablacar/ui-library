import styled from 'styled-components'

import { responsiveBreakpoints, space } from '../_utils/branding'
import { normalizeHorizontally } from '../layout/layoutNormalizer'

export const StyledSpecialOffer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${space.m};
  align-items: center;
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
  padding-top: ${space.xl};
  padding-bottom: ${space.m};

  ${normalizeHorizontally}

  & > img {
    display: block;
    width: 100%;
    max-width: 300px;
  }
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
