import styled from 'styled-components'
import { color, space, componentSizes } from '_utils/branding'

import ItineraryLocation from './ItineraryLocation'

const totalTimeWidth = `${Math.ceil(
  parseInt(componentSizes.timeWidth, 10) + parseInt(componentSizes.bulletSize, 10),
)}px`

const StyledItineraryLocation = styled(ItineraryLocation)`
  & {
    position: relative;
    list-style-type: none;
  }

  /* wrapper */
  & .kirk-itineraryLocation-wrapper {
    display: flex;
    padding: ${space.m} 0;
  }

  & a.kirk-itineraryLocation-wrapper {
    background: none;
    text-decoration: none;
    user-select: none;
    -webkit-tap-highlight-color: ${color.tapHighlight};
    -webkit-touch-callout: none;
  }

  & button.kirk-itineraryLocation-wrapper {
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

  & a.kirk-itineraryLocation-wrapper:hover,
  & button.kirk-itineraryLocation-wrapper:hover {
    background-color: ${color.tapHighlight};
  }

  /* city */
  & time {
    min-width: ${totalTimeWidth};
  }

  & .kirk-itineraryLocation-chevron {
    display: flex;
    align-self: center;
  }

  & .kirk-itineraryLocation-city {
    display: flex;
  }

  & .kirk-itineraryLocation-label {
    flex: 1;
    min-width: 0; /* reset flex default to allow shrinking below content width */
  }

  & .kirk-itineraryLocation-label-text {
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &:not(.kirk-itineraryLocation--arrival) .kirk-itineraryLocation-city {
    padding-bottom: 0;
  }

  & .kirk-itineraryLocation-roadContainer {
    position: relative;
    top: ${space.s};
    margin-right: ${space.m};
  }

  & .kirk-itineraryLocation-bullet {
    z-index: 1; /* Bullets overlap roads */
    position: relative;
  }

  &.kirk-itineraryLocation--withToAddon .kirk-itineraryLocation-road {
    min-height: 48px;
    background-color: ${color.fadedText} !important;
  }
`

export { ItineraryLocationProps, computeKeyFromPlace } from './ItineraryLocation'
export default StyledItineraryLocation
