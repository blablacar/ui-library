import styled from 'styled-components'

import {
  color,
  componentSizes,
  font,
  radius,
  responsiveBreakpoints,
  space,
} from '../../../_utils/branding'
import { Button, ButtonStatus } from '../../../button'
import ItemChoice from '../../../itemChoice'
import { TextDisplay1 } from '../../../typography/display1'

export const StyledHighlightSection = styled.article`
  padding: ${space.xl};
  background-color: ${color.midnightGreen};
  color: ${color.white};
`
export const HighlightSectionContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${componentSizes.largeSectionWidth};
`
export const HighlightSectionTitle = styled(TextDisplay1).attrs({
  isInverted: true,
})`
  // @note: Space is applied to section
  // There is no 32px on spacing spec
  margin: ${space.xl} 0;

  &:first-of-type {
    margin-top: 0;
  }
`
export const HighlightSectionItem = styled(ItemChoice)`
  border-radius: ${radius.m};

  // increase specificity to override sytles from ItemChoice
  && {
    display: flex;
    background-color: ${color.white};
    color: ${color.midnightGreen};
    font-size: ${font.m.size};
    line-height: ${font.m.lineHeight};
    align-items: center;

    & .kirk-item-leftWrapper {
      max-height: 2.3em;
      overflow: hidden;
      text-overflow: ellipsis;
      max-lines: 2;
      line-clamp: 2;
      align-items: flex-start;
      -webkit-line-clamp: 2;
    }

    & .kirk-item-rightText {
      display: flex;
      flex-shrink: 0;
    }
  }
`
export const HighlightSectionLink = styled(Button).attrs({
  status: ButtonStatus.UNSTYLED,
})`
  && {
    display: flex;
    flex-direction: row-reverse;
    margin-left: auto;
    //grid issue
    margin-right: ${space.m};
  }
`

/* GRID SYSTEM: 3 Columns */
export const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
`
export const Col = styled.li`
  flex: 1;
  margin: ${space.m} ${space.m} ${space.m} 0;

  @media (${responsiveBreakpoints.isMediaLarge}) {
    flex: 0 0 calc(33.333% - ${space.m});
    /* margin: ${space.m} 0; */

    // Remove margin to last item per row
    &:nth-child(3n) {
      margin-right: 0;
    }

    // Remove margin from the 2nd row since its not collapsing
    &:nth-child(n + 4) {
      margin-top: 0;
    }
  }
`
