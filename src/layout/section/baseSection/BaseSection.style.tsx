import styled from 'styled-components'

import { componentSizes, horizontalSpace, responsiveBreakpoints } from '../../../_utils/branding'

export const StyledBaseSection = styled.div`
  & .section-content {
    padding-left: ${horizontalSpace.global};
    padding-right: ${horizontalSpace.global};
  }

  & .section-content--noHorizontalSpacing {
    padding-left: 0;
    padding-right: 0;
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
