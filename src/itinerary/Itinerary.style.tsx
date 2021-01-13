import styled from 'styled-components'

import { color, componentSizes, font, space } from '../_utils/branding'
import { ItineraryProps } from './Itinerary'

const distanceFromHeight = '48px'
const totalTimeWidth = `${Math.ceil(
  parseInt(componentSizes.timeWidth, 10) + parseInt(componentSizes.bulletSize, 10),
)}px`
const smallBulletPositionDifference = `${Math.ceil(
  (parseInt(componentSizes.bulletSize, 10) - parseInt(componentSizes.bulletSizeSmall, 10)) / 2,
)}px`

export const StyledItinerary = styled.div`
  li {
    position: relative;
    list-style-type: none;
  }
  & {
    padding-top: ${space.m};
  }

  & .kirk-itinerary--headline {
    padding-top: ${space.xl};
    padding-bottom: ${space.m};
  }

  & .kirk-itinerary--highlightRoad .kirk-itineraryLocation-road {
    background-color: ${color.midnightGreen};
  }

  & .kirk-itineraryLocation-road {
    display: block;
    width: ${componentSizes.roadWidth};
    height: calc(
      100% - ${componentSizes.bulletSize} + 4px
    ); /* +4px to better hide behind small Bullets */
    position: relative;
    top: -1px; /* -1px to better hide behind small Bullets */
    background-color: ${color.gray};
    margin: 0 auto;
  }

  & .kirk-itinerary--noTime .kirk-itinerary-addon {
    margin-left: 0;
  }

  /* addons */
  & .kirk-itinerary-addon {
    padding-left: ${space.l}; /* Adding the width of the step points to the regular spacing */
    height: ${distanceFromHeight};
    display: flex;
    padding-left: 0;
    margin-left: ${totalTimeWidth};
  }

  & .kirk-itinerary-addon .kirk-itineraryLocation-roadContainer {
    position: relative;
    top: ${space.s};
    margin-right: ${space.m};
  }

  & .kirk-itinerary-addon--to .kirk-itineraryLocation-label {
    padding-bottom: 0;
  }

  & .kirk-itinerary-addon--to .kirk-itineraryLocation-roadContainer {
    position: static;
  }

  & :not(.kirk-itinerary--noTime) .kirk-itinerary-addon .kirk-itineraryLocation-city {
    margin-left: calc(${space.m} + ${componentSizes.timeWidth});
  }

  /* road, only for -addon--from */
  & .kirk-itinerary-addon--from .kirk-itineraryLocation-road {
    background-color: ${color.gray};
  }

  & .kirk-itineraryLocation-smallLabel .kirk-text {
    font-size: ${font.s.size};
  }

  & .kirk-itineraryLocation-chevron {
    /* Because right now it's not possible to add a new item in the Itinerary list without being a place.
     The hack is to have the "Change of vehicle" inside the place where the connection occurs. */
    align-self: ${(props: ItineraryProps) => (props.segments ? 'baseline' : 'center')};
  }

  & .kirk-itineraryLocation-smallLabel {
    margin-left: calc(${totalTimeWidth} + ${smallBulletPositionDifference});
  }

  /* isCollapsible */
  & .kirk-itineraryCollapsible {
    margin-left: calc(${totalTimeWidth} + ${smallBulletPositionDifference});
  }

  & .kirk-itinerary--noTime .kirk-itineraryCollapsible,
  & .kirk-itinerary--noTime .kirk-itineraryLocation-smallLabel {
    margin-left: ${smallBulletPositionDifference};
  }

  & .kirk-itinerary--noTime .kirk-itineraryLocation-smallLabel .kirk-bullet {
    top: ${smallBulletPositionDifference};
  }

  & .kirk-itineraryLocation-wrapper {
    padding: 0;
  }

  & .kirk-itineraryLocation-label {
    padding-bottom: ${space.l};
  }
`

export { ItineraryProps } from './Itinerary'
export { StyledItinerary as Itinerary }
export default StyledItinerary
