import styled from 'styled-components'
import { color, space, responsiveBreakpoints, componentSizes } from '_utils/branding'

import TripsSection from './TripsSection'

const wrapperHorizontalPadding = space.xl

const StyledTripsSection = styled(TripsSection)`
  & {
    background-color: ${color.lightBackground};
  }

  & .kirk-tripsSection {
    margin: auto;
    display: flex;
    padding: ${space.l} ${wrapperHorizontalPadding};
    box-sizing: border-box;
    overflow: auto; /* Make TripCards scrollable horizontally */
    -ms-overflow-style: none; /* Remove scrollbar visually IE 10+ */
    scrollbar-width: none; /* Remove scrollbar visually Firefox */
    scroll-snap-type: x mandatory;
    scroll-padding: ${space.xl};
  }

  & .kirk-tripsSection .kirk-tripCard {
    scroll-snap-align: start;
  }

  /* Remove scrollbar webkit */
  & .kirk-tripsSection::-webkit-scrollbar {
    display: none;
  }

  & .kirk-tripCard {
    flex: 1;
    margin-right: ${space.m};
    background-color: ${color.white};
    position: relative;
  }

  & .kirk-tripCard:last-child {
    margin-right: 0;
  }

  /* The browser does not add right padding at the end of the scroll, CSS solution:
  * https://blog.alexandergottlieb.com/overflow-scroll-and-the-right-padding-problem-a-css-only-solution-6d442915b3f4
  */
  & .kirk-tripCard:last-child::after {
    content: '';
    display: block;
    position: absolute;
    right: -${wrapperHorizontalPadding};
    width: ${wrapperHorizontalPadding};
    height: 1px;
  }

  @media (${responsiveBreakpoints.isMediaLarge}) {
    & .kirk-tripsSection {
      max-width: ${componentSizes.smallSectionWidth};
    }
  }

  @media (${responsiveBreakpoints.isMediaSmall}) {
    & .kirk-tripCard {
      min-width: calc(100% - ${space.m});
    }
  }
`

export { TripsSectionProps } from './TripsSection'
export default StyledTripsSection
