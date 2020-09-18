import styled from 'styled-components'

import { componentSizes, responsiveBreakpoints, space } from '../../../_utils/branding'

export const StyledTabsSection = styled.div`
  @media (${responsiveBreakpoints.isMediaLarge}) {
    & .kirk-tablist-wrapper {
      width: calc(${componentSizes.smallSectionWidth} - 2 * ${space.xl});
      margin: 0 auto;
    }
  }
`
