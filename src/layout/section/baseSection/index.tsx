import styled from 'styled-components'
import { responsiveBreakpoints, componentSizes, space } from '_utils/branding'

import BaseSection from './baseSection'

const StyledBaseSection = styled(BaseSection)`
  & .section-content {
    padding-left: ${space.xl};
    padding-right: ${space.xl};
  }

  @media (${responsiveBreakpoints.isMediaLarge}) {
    & .section-content {
      margin-left: auto;
      margin-right: auto;
      max-width: ${componentSizes.smallSectionWidth};
    }

    & .section-content.section-content--large {
      max-width: ${componentSizes.largeSectionWidth};
    }
  }
`

export { BaseSectionProps, SectionContentSize } from './baseSection'
export default StyledBaseSection
