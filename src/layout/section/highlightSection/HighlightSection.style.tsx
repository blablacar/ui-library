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
import { ItemChoice } from '../../../itemChoice'
import { TextDisplay1 } from '../../../typography/display1'

const Section = styled.section`
  padding: 0 ${space.xl};
  background-color: ${color.midnightGreen};
  color: ${color.white};
`
const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${componentSizes.largeSectionWidth};
`
export const Article = styled.article`
  display: ${props => props.hidden && 'none'};
`

// Override TextDisplay1
const Title = styled(TextDisplay1).attrs({
  isInverted: true,
})`
  // @note: Space is applied to section
  padding: ${space.xl} 0;
`

// Override ItemChoice
const Item = styled(ItemChoice)`
  border-radius: ${radius.m};

  // increase specificity to override sytles from ItemChoice
  && {
    display: flex;
    min-height: 4.75em;
    align-items: center;
    background-color: ${color.white};
    color: ${color.midnightGreen};
    font-size: ${font.m.size};
    line-height: ${font.m.lineHeight};

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

// Override Button
const Link = styled(Button).attrs({
  status: ButtonStatus.UNSTYLED,
})`
  && {
    padding: 0;
  }
`

const Actions = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: ${space.m} 0 ${space.xl};
  margin-left: auto;
`

/* GRID SYSTEM: 3 Columns */
export const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${space.l};
  row-gap: ${space.m};
  grid-auto-rows: minmax(4.75em, auto);

  @media (${responsiveBreakpoints.isMediaLarge}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
export const Col = styled.li`
  display: ${props => props.hidden && 'none'};
  padding: 0;
  margin: 0;
`

export const HighlightSectionElements = {
  Section,
  Content,
  Article,
  Title,
  Item,
  Actions,
  Button: Link,
}
