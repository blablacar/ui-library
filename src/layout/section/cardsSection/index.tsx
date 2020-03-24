import styled from 'styled-components'
import { color, space, responsiveBreakpoints, componentSizes } from '_utils/branding'

import CardsSection from './CardsSection'

const wrapperHorizontalPadding = space.xl

const StyledCardsSection = styled(CardsSection)`
  & {
    background-color: ${color.lightBackground};
  }

  & .kirk-cardsSection {
    margin: auto;
    display: flex;
    padding: ${space.l} ${wrapperHorizontalPadding};
    box-sizing: border-box;
    overflow: auto; /* Make Cards scrollable horizontally */
    -ms-overflow-style: none; /* Remove scrollbar visually IE 10+ */
    scrollbar-width: none; /* Remove scrollbar visually Firefox */
    scroll-snap-type: x mandatory;
    scroll-padding: ${space.xl};
  }

  & .kirk-cardsSection .kirk-card {
    scroll-snap-align: start;
    overflow: hidden;
  }

  /* Remove scrollbar webkit */
  & .kirk-cardsSection::-webkit-scrollbar {
    display: none;
  }

  & .kirk-card {
    flex: 1;
    margin-right: ${space.m};
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
    & .kirk-cardsSection {
      max-width: ${componentSizes.smallSectionWidth};
    }
  }

  @media (${responsiveBreakpoints.isMediaSmall}) {
    & .kirk-card {
      min-width: calc(100% - ${space.m});
    }
  }
`

export { CardsSectionProps } from './CardsSection'
export default StyledCardsSection
