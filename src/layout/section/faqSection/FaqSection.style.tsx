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
    ul {
      display: flex;
      flex-wrap: wrap;
    }

    li {
      min-width: 50%;
      max-width: 50%;
    }
  }
`

const StyledList = styled.ul`
  @media (${responsiveBreakpoints.isMediaLarge}) {
    display: flex;
    flex-wrap: wrap;
  }
`

const StyledListItem = styled.li`
  @media (${responsiveBreakpoints.isMediaLarge}) {
    min-width: 50%;
    max-width: 50%;
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
  List: StyledList,
  ListItem: StyledListItem,
  ButtonWrapper: StyledButtonWrapper,
  Title: StyledTitle,
  Question: StyledQuestion,
}
