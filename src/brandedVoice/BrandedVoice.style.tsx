import styled from 'styled-components'

import { componentSizes, gradientColors, responsiveBreakpoints, space } from '../_utils/branding'
import { normalizeHorizontally } from '../layout/layoutNormalizer'

export const StyledBrandedVoice = styled.div`
  ${normalizeHorizontally};
  background: ${gradientColors.blueGradient};
  padding-top: ${space.l};
  padding-bottom: ${space.xl};
`

export const StyledWrapper = styled.div`
  display: flex;

  @media (${responsiveBreakpoints.isMediaLarge}) {
    margin-left: auto;
    margin-right: auto;
    max-width: ${componentSizes.smallSectionWidth};
  }
`

export const StyledIcon = styled.div`
  margin: ${space.s} ${space.s} 0 0;
`

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
`
