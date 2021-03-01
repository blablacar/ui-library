import styled from 'styled-components'

import { responsiveBreakpoints, space } from '../../../_utils/branding'
import { normalizeHorizontally } from '../../../layout/layoutNormalizer'
import { BaseSection } from '../../../layout/section/baseSection'
import { TextDisplay1 } from '../../../typography/display1'
import { TextTitleStrong } from '../../../typography/titleStrong'

const StyledSection = styled(BaseSection)`
  margin-top: ${space.xl};
  margin-bottom: ${space.xl};

  @media (${responsiveBreakpoints.isMediaLarge}) {
  }

  @media (${responsiveBreakpoints.isMediaSmall}) {
  }
`

const StyledButtonWrapper = styled.div`
  margin: ${space.xl};
  text-align: center;
`

const StyledTitle = styled(TextDisplay1)`
  ${normalizeHorizontally};
  margin-bottom: ${space.xxl};
  text-align: center;
`

const StyledQuestion = styled(TextTitleStrong)`
  ${normalizeHorizontally};
`

export const StyledFaqSection = {
  Section: StyledSection,
  ButtonWrapper: StyledButtonWrapper,
  Title: StyledTitle,
  Question: StyledQuestion,
}
