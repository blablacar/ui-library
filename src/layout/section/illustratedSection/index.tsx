import styled from 'styled-components'
import { responsiveBreakpoints, space } from '_utils/branding'

import IllustratedSection from './illustratedSection'

const StyledIllustratedSection = styled(IllustratedSection)`
  & .section-content {
    display: flex;
    flex-direction: column;
  }

  & .kirk-illustratedSection-illustration {
    margin-left: -${space.xl};
    margin-right: -${space.xl};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }

  & .kirk-illustratedSection-illustration img {
    max-width: 100%;
  }

  @media (${responsiveBreakpoints.isMediaLarge}) {
    & .section-content {
      flex-direction: row;
    }

    & .kirk-illustratedSection-illustration {
      margin-left: 0;
      margin-right: 0;
      width: 33.33%;
      padding-top: ${space.xl};
    }

    & .kirk-illustratedSection-content {
      margin-left: ${space.xl};
      width: 66.66%;
    }
  }
`

export { IllustratedSectionProps } from './illustratedSection'
export default StyledIllustratedSection
