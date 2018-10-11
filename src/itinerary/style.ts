import css from 'styled-jsx/css'
import { color, font, fontWeight, space } from '_utils/branding'

const distanceFromHeight = '40px'
export const timeWidth = '64px'

export default css`
  li {
    position: relative;
    list-style-type: none;
  }

  .kirk-itinerary-headline {
    padding-bottom: ${space.l};
  }

  .kirk-itinerary-location {
    display: flex;
  }

  .kirk-itinerary-location time {
    min-width: ${timeWidth};
  }

  .kirk-itinerary-location div {
    padding-left: ${space.l}; /* Adding the width of the step points to the regular spacing */
  }

  .kirk-itinerary-location:not(.kirk-itinerary--arrival) div {
    padding-bottom: ${space.l};
  }

  .kirk-itinerary--small .kirk-itinerary-location:not(.kirk-itinerary--arrival) div {
    padding-bottom: 0;
  }

  .kirk-itinerary-location div::before,
  .kirk-itinerary-location div::after {
    box-sizing: border-box;
    content: '';
    display: block;
    width: 4px;
    position: absolute;
    z-index: 1;
  }

  .kirk-itinerary-location div::before {
    height: 100%;
    background-color: ${color.primaryText};
    top: 0;
    left: ${timeWidth};
  }

  .kirk-itinerary--small .kirk-itinerary-location div::before {
    left: 2px;
  }

  .kirk-itinerary-location div::after {
    width: 8px;
    height: 8px;
    background-color: ${color.white};
    border: 2px solid ${color.primaryText};
    border-radius: 50%;
    top: 4px;
    left: calc(${timeWidth} - 2px);
  }

  .kirk-itinerary--small .kirk-itinerary-location div::after {
    left: 0;
  }

  .kirk-itinerary-location.kirk-itinerary--departure div::before {
    height: calc(100% - 6px);
    top: 6px;
  }

  .kirk-itinerary-location.kirk-itinerary--arrival div::before {
    height: 6px;
  }

  .kirk-itinerary-fromAddon,
  .kirk-itinerary-toAddon {
    height: ${distanceFromHeight};
  }

  .kirk-itinerary-fromAddon::before,
  .kirk-itinerary-fromAddon::after,
  .kirk-itinerary-location.kirk-itinerary-location--toAddon::before,
  .kirk-itinerary-location.kirk-itinerary-location--toAddon::after {
    content: '';
    display: block;
    position: absolute;
  }

  .kirk-itinerary-fromAddon::before,
  .kirk-itinerary-location.kirk-itinerary-location--toAddon::before {
    width: 0;
    border: 2px solid ${color.lightBackground};
    left: ${timeWidth};
    bottom: -4px;
  }

  .kirk-itinerary--small .kirk-itinerary-fromAddon::before,
  .kirk-itinerary--small .kirk-itinerary-location.kirk-itinerary-location--toAddon::before {
    left: 2px;
  }

  .kirk-itinerary-fromAddon::before {
    height: 100%;
  }

  .kirk-itinerary-location.kirk-itinerary-location--toAddon::before {
    height: calc(100% + ${distanceFromHeight});
    bottom: -${distanceFromHeight};
  }

  .kirk-itinerary-fromAddon::after,
  .kirk-itinerary-location.kirk-itinerary-location--toAddon::after {
    width: 8px;
    height: 8px;
    background-color: #fff;
    border: 2px solid ${color.lightBackground};
    border-radius: 50%;
    left: calc(${timeWidth} - 2px);
  }

  .kirk-itinerary--small .kirk-itinerary-fromAddon::after,
  .kirk-itinerary--small .kirk-itinerary-location.kirk-itinerary-location--toAddon::after {
    left: 0;
  }

  .kirk-itinerary-fromAddon::after {
    top: 0;
  }

  .kirk-itinerary-location.kirk-itinerary-location--toAddon::after {
    bottom: -${distanceFromHeight};
  }

  :global(.kirk-itinerary-fromAddon span),
  :global(.kirk-itinerary-toAddon span) {
    display: inline-block;
    padding-left: ${space.l};
    color: ${color.lightBackground};
    position: absolute;
    left: ${timeWidth};
  }

  :global(.kirk-itinerary--small .kirk-itinerary-fromAddon span),
    :global(.kirk-itinerary--small .kirk-itinerary-toAddon span) {
    left: 0;
  }

  :global(.kirk-itinerary-fromAddon span) {
    top: -4px;
  }

  :global(.kirk-itinerary-toAddon span) {
    bottom: -4px;
  }
`
