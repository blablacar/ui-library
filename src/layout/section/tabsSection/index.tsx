import styled from 'styled-components'

import { componentSizes, responsiveBreakpoints, space } from '../../../_utils/branding'
import { TabsSection } from './tabsSection'

const StyledTabsSection = styled(TabsSection)`
  @media (${responsiveBreakpoints.isMediaLarge}) {
    & .kirk-tablist-wrapper {
      width: calc(${componentSizes.smallSectionWidth} - 2 * ${space.xl});
      margin: 0 auto;
    }
  }
`

export { StyledTabsSection as TabsSection }
export default StyledTabsSection
