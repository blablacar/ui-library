import styled from 'styled-components'

import { color, componentSizes, responsiveBreakpoints, space } from '../../../_utils/branding'
import { TextDisplay1 } from '../../../typography/display1'

const wrapperHorizontalPadding = space.xl
const cardsPerRowSmall = 2
const cardsPerRowLarge = 3

export const StyledTitle = styled(TextDisplay1)`
  margin: ${space.l} 0 ${space.m};
  text-align: center;

  @media (${responsiveBreakpoints.isMediaLarge}) {
    text-align: left;
  }
`

export const StyledCardsGridSection = styled.div`
  & .kirk-cardsGridSection-title {
    margin: ${space.l} 0 ${space.m};
    text-align: center;
  }

  & .kirk-cardsGridSection-button {
    text-align: center;
  }

  & .kirk-cardsGridSection {
    margin: auto;
    display: flex;
    justify-content: start;
    padding: ${space.l} ${wrapperHorizontalPadding};
    box-sizing: border-box;
    overflow: auto; /* Make Cards scrollable horizontally */
    -ms-overflow-style: none; /* Remove scrollbar visually IE 10+ */
    scrollbar-width: none; /* Remove scrollbar visually Firefox */
    scroll-snap-type: x mandatory;
    scroll-padding: ${space.xl};
  }

  & .kirk-cardsGridSection .kirk-card {
    scroll-snap-align: start;
    overflow: hidden;
  }

  /* Remove scrollbar webkit */
  & .kirk-cardsGridSection::-webkit-scrollbar {
    display: none;
  }

  & .kirk-card {
    flex: 1;
    min-width: calc(100% - ${space.m});
    margin: 0 ${space.l} 0 0;
    background-color: ${color.white};
    position: relative;
  }

  & .kirk-card:last-child {
    margin-right: 0;
  }

  /* The browser does not add right padding at the end of the scroll, CSS solution:
  * https://blog.alexandergottlieb.com/overflow-scroll-and-the-right-padding-problem-a-css-only-solution-6d442915b3f4
  */
  & .kirk-card:last-child::after {
    content: '';
    display: block;
    position: absolute;
    right: -${wrapperHorizontalPadding};
    width: ${wrapperHorizontalPadding};
    height: 1px;
  }

  @media (${responsiveBreakpoints.isMediaLarge}) {
    & .kirk-cardsGridSection {
      padding: ${space.l} 0;
      max-width: ${componentSizes.smallSectionWidth};
      flex-wrap: wrap;
    }

    & .kirk-cardsGridSection-title {
      text-align: left;
    }

    &.kirk-cardsGridSection-wrapper--large .kirk-cardsGridSection {
      max-width: ${componentSizes.largeSectionWidth};
    }

    & .kirk-card,
    & .kirk-card:last-child {
      /* (section width - total margins) / X cards */
      min-width: calc((${componentSizes.smallSectionWidth} - ${space.xxl}) / ${cardsPerRowSmall});
      max-width: calc((${componentSizes.smallSectionWidth} - ${space.xxl}) / ${cardsPerRowSmall});
      margin: 0 ${space.m} ${space.l};
    }

    &.kirk-cardsGridSection-wrapper--large .kirk-card {
      /* (section width - total margins) / X cards */
      min-width: calc((${componentSizes.largeSectionWidth} - ${space.xxl}) / ${cardsPerRowLarge});
      max-width: calc((${componentSizes.largeSectionWidth} - ${space.xxl}) / ${cardsPerRowLarge});
    }
  }
`
