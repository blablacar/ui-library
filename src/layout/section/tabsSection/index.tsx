import styled from 'styled-components'
import { space, responsiveBreakpoints, componentSizes } from '_utils/branding'

import TabsSection from './tabsSection'

const StyledTabsSection = styled(TabsSection)`
  @media (${responsiveBreakpoints.isMediaSmall}) {
    & .kirk-panels-section {
      padding-left: ${space.xl};
      padding-right: ${space.xl};
    }
  }

  @media (${responsiveBreakpoints.isMediaLarge}) {
    & .kirk-panels-section,
    & .kirk-tablist-wrapper {
      width: calc(${componentSizes.smallSectionWidth} - 2 * ${space.xl});
      margin: 0 auto;
    }
  }
`

export default StyledTabsSection
