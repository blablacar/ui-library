import styled from 'styled-components'

import { componentSizes, responsiveBreakpoints, space } from '../../../_utils/branding'

export const StyledMediaSection = styled.div`
  @media (${responsiveBreakpoints.isMediaLarge}) {
    padding-left: ${space.xl};
    padding-right: ${space.xl};
    margin-left: auto;
    margin-right: auto;
    max-width: ${componentSizes.smallSectionWidth};
  }
`
