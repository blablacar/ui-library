import styled from 'styled-components'

import { responsiveBreakpoints, space } from '../../../_utils/branding'

export const StyledIllustratedSection = styled.div`
  & .section-content {
    display: flex;
    flex-direction: column;
  }

  & .kirk-illustratedSection-illustration {
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
