import styled from 'styled-components'
import { color, space, componentSizes } from '_utils/branding'

import Itinerary from './Itinerary'

const distanceFromHeight = '40px'
const gutterPaddingStart = space.m
const gutterTopOffset = '2px'

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
    background-color: ${color.tapHighlight}};
  }

  & .kirk-itinerary-location time {
    min-width: calc(${gutterPaddingStart} + ${componentSizes.timeWidth});
  }

  & .kirk-itinerary-location-city {
    padding-left: ${space.l}; /* Adding the width of the step points to the regular spacing */
  }

  &
    .kirk-itinerary--small
    .kirk-itinerary-location:not(.kirk-itinerary--arrival)
    .kirk-itinerary-location-city {
    padding-bottom: 0;
  }

  & .kirk-itinerary-location .kirk-itinerary-location-city::before,
  & .kirk-itinerary-location .kirk-itinerary-location-city::after {
    box-sizing: border-box;
    content: '';
    display: block;
    width: 4px;
    position: absolute;
  }

  & .kirk-itinerary-location .kirk-itinerary-location-city::before {
    height: 100%;
    background-color: ${color.primaryText};
    top: 0;
    left: calc(${gutterPaddingStart} + ${componentSizes.timeWidth});
  }

  & .kirk-itinerary--small .kirk-itinerary-location .kirk-itinerary-location-city::before {
    left: 2px;
  }

  & .kirk-itinerary-location .kirk-itinerary-location-city::after {
    width: 8px;
    height: 8px;
    background-color: ${color.white};
    border: 2px solid ${color.primaryText};
    border-radius: 50%;
    top: calc(4px + ${space.m} + ${gutterTopOffset});
    left: calc(${gutterPaddingStart} + ${componentSizes.timeWidth} - 2px);
  }

  & .kirk-itinerary-location.kirk-itinerary--departure .kirk-itinerary-location-city::after,
  & .kirk-itinerary-location.kirk-itinerary--arrival .kirk-itinerary-location-city::after {
    top: calc(4px + ${space.m} + ${gutterTopOffset});
  }

  & .kirk-itinerary--small .kirk-itinerary-location .kirk-itinerary-location-city::after {
    left: 0;
  }

  & .kirk-itinerary-location.kirk-itinerary--departure .kirk-itinerary-location-city::before {
    height: calc(100% - calc(6px + ${space.m}));
    top: calc(6px + ${space.m} + ${gutterTopOffset});
  }

  & .kirk-itinerary-location.kirk-itinerary--arrival .kirk-itinerary-location-city::before {
    height: calc(6px + ${space.m} + ${gutterTopOffset});
  }

  /* Only one step */
  &
    .kirk-itinerary-location.kirk-itinerary--departure.kirk-itinerary--arrival
    .kirk-itinerary-location-city::before {
    display: none;
  }

  & .kirk-itinerary-fromAddon,
  & .kirk-itinerary-toAddon {
    height: ${distanceFromHeight};
  }

  & .kirk-itinerary-fromAddon::before,
  & .kirk-itinerary-fromAddon::after,
  & .kirk-itinerary-location.kirk-itinerary-location--toAddon::before,
  & .kirk-itinerary-location.kirk-itinerary-location--toAddon::after {
    content: '';
    display: block;
    position: absolute;
  }

  & .kirk-itinerary-fromAddon::before,
  & .kirk-itinerary-location.kirk-itinerary-location--toAddon::before {
    width: 0;
    border: 2px solid ${color.border};
    left: calc(${gutterPaddingStart} + ${componentSizes.timeWidth});
    bottom: -4px;
  }

  & .kirk-itinerary--small .kirk-itinerary-fromAddon::before,
  & .kirk-itinerary--small .kirk-itinerary-location.kirk-itinerary-location--toAddon::before {
    left: 2px;
  }

  & .kirk-itinerary-fromAddon::before {
    height: calc(100% + ${space.m} + 4px);
    top: 6px;
  }

  & .kirk-itinerary-location.kirk-itinerary-location--toAddon::before {
    height: calc(100% + ${distanceFromHeight});
    bottom: -${distanceFromHeight};
  }

  & .kirk-itinerary-fromAddon::after,
  & .kirk-itinerary-location.kirk-itinerary-location--toAddon::after {
    width: 8px;
    height: 8px;
    background-color: #fff;
    border: 2px solid ${color.border};
    border-radius: 50%;
    left: calc(${gutterPaddingStart} + ${componentSizes.timeWidth} - 2px);
  }

  & .kirk-itinerary--small .kirk-itinerary-fromAddon::after,
  & .kirk-itinerary--small .kirk-itinerary-location.kirk-itinerary-location--toAddon::after {
    left: 0;
  }

  & .kirk-itinerary-fromAddon::after {
    top: 0;
  }

  & .kirk-itinerary-location.kirk-itinerary-location--toAddon::after {
    bottom: -${distanceFromHeight};
  }

  & .kirk-itinerary-fromAddon .kirk-itinerary-addon-content,
  & .kirk-itinerary-toAddon .kirk-itinerary-addon-content {
    display: inline-block;
    padding-left: ${space.l};
    color: ${color.fadedText};
    position: absolute;
    left: calc(${gutterPaddingStart} + ${componentSizes.timeWidth});
  }

  & .kirk-itinerary--small .kirk-itinerary-fromAddon .kirk-itinerary-addon-content,
  & .kirk-itinerary--small .kirk-itinerary-toAddon .kirk-itinerary-addon-content {
    left: 0;
  }

  & .kirk-itinerary-fromAddon .kirk-itinerary-addon-content {
    top: -4px;
  }

  & .kirk-itinerary-toAddon .kirk-itinerary-addon-content {
    bottom: -4px;
  }

  & .kirk-itinerary-location-city {
    flex: 1;
  }

  & .kirk-itinerary-location-chevron {
    display: flex;
    align-items: center;
  }
`

export default StyledItinerary
