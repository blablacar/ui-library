import styled from 'styled-components'
import { color, space, componentSizes } from '_utils/branding'

import Itinerary from './Itinerary'

const distanceFromHeight = '40px'
const gutterPaddingStart = space.m
const gutterTopOffset = '1px'
const lineHeightAdjustment = '4px'
const bulletOuterSize = '10px'
const roadWidth = '4px'

const StyledItinerary = styled(Itinerary)`
  li {
    position: relative;
    list-style-type: none;
  }

  & .kirk-itinerary-location-wrapper {
    display: flex;
    padding: ${space.m} 0;
    width: 100%;
  }

  & a.kirk-itinerary-location-wrapper {
    background: none;
    text-decoration: none;
    user-select: none;
    -webkit-tap-highlight-color: ${color.tapHighlight};
    -webkit-touch-callout: none;
  }

  & button.kirk-itinerary-location-wrapper {
    border: 0;
    cursor: pointer;
    text-align: left;
    width: 100%;
    font-family: inherit;
    outline: none;
    background-color: transparent;
    -webkit-tap-highlight-color: ${color.tapHighlight};
    -webkit-touch-callout: none;
  }

  & a.kirk-itinerary-location-wrapper:hover,
  & button.kirk-itinerary-location-wrapper:hover {
    background-color: ${color.tapHighlight};
  }

  & .kirk-itinerary-location time {
    min-width: calc(${gutterPaddingStart} + ${componentSizes.timeWidth});
  }

  & .kirk-itinerary-location-chevron {
    display: flex;
    align-items: center;
  }

  & .kirk-itinerary-location-city {
    padding-left: ${space.l}; /* Adding the width of the step points to the regular spacing */
    flex: 1;
  }

  &
    .kirk-itinerary--noTime
    .kirk-itinerary-location:not(.kirk-itinerary--arrival)
    .kirk-itinerary-location-city {
    padding-bottom: 0;
  }

  /* bullet */
  & .kirk-bullet {
    z-index: 2;
    position: absolute;
    top: calc(${lineHeightAdjustment} + ${space.m} + ${gutterTopOffset});
    left: calc(${componentSizes.timeWidth} + (${bulletOuterSize} / 2));
  }

  & .kirk-itinerary-addon--from .kirk-bullet {
    top: calc(-1 * ${gutterTopOffset});
  }

  & .kirk-itinerary-addon--to .kirk-bullet {
    top: auto;
    bottom: calc(-1 * ${gutterTopOffset});
  }

  & .kirk-itinerary--noTime .kirk-bullet {
    left: 0;
  }

  /* addons */
  & .kirk-itinerary-addon {
    height: ${distanceFromHeight};
  }

  & :not(.kirk-itinerary--noTime) .kirk-itinerary-addon .kirk-itinerary-location-city {
    margin-left: calc(${gutterPaddingStart} + ${componentSizes.timeWidth});
  }

  & .kirk-itinerary-addon .kirk-itinerary-location-city .kirk-text {
    position: relative;
    top: calc(-1 * ${lineHeightAdjustment});
  }

  & .kirk-itinerary-addon--to .kirk-itinerary-location-city .kirk-text {
    top: calc(${distanceFromHeight} - ${bulletOuterSize} - 2px); /* Magic */
  }

  /* road */
  & .kirk-itinerary-road {
    z-index: 1;
    position: absolute;
    top: calc(${bulletOuterSize} + ${space.m} + ${lineHeightAdjustment});
    left: calc(${gutterPaddingStart} + ${componentSizes.timeWidth});
    width: ${roadWidth};
    height: calc(100% - (${space.m}));
    background-color: ${color.primaryText};
  }

  & .kirk-itinerary--noTime .kirk-itinerary-road {
    left: calc((${bulletOuterSize} - ${roadWidth}) / 2);
  }

  & .kirk-itinerary-addon--from .kirk-itinerary-road,
  & .kirk-itinerary--arrival .kirk-itinerary-road {
    background-color: ${color.fadedText};
  }

  & .kirk-itinerary-addon--from .kirk-itinerary-road {
    top: calc(${bulletOuterSize} - (${lineHeightAdjustment} / 2));
    height: calc(100% + (${bulletOuterSize} / 2));
  }

  & .kirk-itinerary--arrival .kirk-itinerary-road {
    height: calc(100% + (${bulletOuterSize}));
  }

  & .kirk-itinerary--arrival:not(.kirk-itinerary-location--withToAddon) .kirk-itinerary-road {
    display: none;
  }
`

export { ItineraryProps } from './Itinerary'
export default StyledItinerary
