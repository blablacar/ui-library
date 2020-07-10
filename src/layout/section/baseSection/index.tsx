import styled from 'styled-components'

import { componentSizes, horizontalSpace, responsiveBreakpoints } from '../../../_utils/branding'
import { BaseSection } from './baseSection'

const StyledBaseSection = styled(BaseSection)`
  & .section-content {
    padding-left: ${props => (props.noHorizontalSpacing ? 0 : horizontalSpace.global)};
    padding-right: ${props => (props.noHorizontalSpacing ? 0 : horizontalSpace.global)};
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
export { StyledBaseSection as BaseSection }
export default StyledBaseSection
