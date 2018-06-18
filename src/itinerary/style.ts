import css from 'styled-jsx/css'
import { color, font, fontWeight, space } from '_utils/branding'

const distanceFromHeight = '40px'
const timeWidth = '64px'

export default css`
  li {
    position: relative;
    list-style-type: none;
  }

  .kirk-itinerary-headline {
    padding-bottom: ${space.l};
    font-size: ${font.m.size};
    line-height: ${font.m.lineHeight};
    font-weight: ${fontWeight.regular};
    color: ${color.primaryText};
  }

  .kirk-itinerary-location {
    display: flex;
    font-size: ${font.m.size};
    line-height: ${font.m.lineHeight};
    font-weight: ${fontWeight.medium};
    color: ${color.primaryText};
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

  .kirk-itinerary-subtext {
    display: block;
    font-size: ${font.s.size};
    line-height: ${font.s.lineHeight};
    font-weight: ${fontWeight.regular};
    color: ${color.secondaryText};
  }

  .kirk-itinerary-fromDeparture,
  .kirk-itinerary-fromArrival {
    height: ${distanceFromHeight};
  }

  .kirk-itinerary-fromDeparture::before,
  .kirk-itinerary-fromDeparture::after,
  .kirk-itinerary-location.kirk-itinerary-location--fromArrival::before,
  .kirk-itinerary-location.kirk-itinerary-location--fromArrival::after {
    content: '';
    display: block;
    position: absolute;
  }

  .kirk-itinerary-fromDeparture::before,
  .kirk-itinerary-location.kirk-itinerary-location--fromArrival::before {
    width: 0;
    border: 1px dashed #708C91;
    left: calc(${timeWidth} + 1px);
  }

  .kirk-itinerary--small .kirk-itinerary-fromDeparture::before,
  .kirk-itinerary--small .kirk-itinerary-location.kirk-itinerary-location--fromArrival::before {
    left: 3px;
  }

  .kirk-itinerary-fromDeparture::before {
    height: 100%;
  }

  .kirk-itinerary-location.kirk-itinerary-location--fromArrival::before {
    height: calc(100% + ${distanceFromHeight});
    bottom: -${distanceFromHeight};
  }

  .kirk-itinerary-fromDeparture::after,
  .kirk-itinerary-location.kirk-itinerary-location--fromArrival::after {
    width: 6px;
    height: 6px;
    background-color: #FFF;
    border: 1px solid ${color.secondaryText};
    border-radius: 50%;
    left: calc(${timeWidth} - 1px);
  }

  .kirk-itinerary--small .kirk-itinerary-fromDeparture::after,
  .kirk-itinerary--small .kirk-itinerary-location.kirk-itinerary-location--fromArrival::after {
    left: 1px;
  }

  .kirk-itinerary-fromDeparture::after {
    top: 0;
  }

  .kirk-itinerary-location.kirk-itinerary-location--fromArrival::after {
    bottom: -${distanceFromHeight};
  }

  .kirk-itinerary-fromDeparture span,
  .kirk-itinerary-fromArrival span {
    display: inline-block;
    padding-left: ${space.l};
    font-size: ${font.s.size};
    line-height: ${font.s.lineHeight};
    color: ${color.secondaryText};
    position: absolute;
    left: ${timeWidth};
  }

  .kirk-itinerary--small .kirk-itinerary-fromDeparture span,
  .kirk-itinerary--small .kirk-itinerary-fromArrival span {
    left: 0;
  }

  .kirk-itinerary-fromDeparture span {
    top: 8px;
  }

  .kirk-itinerary-fromArrival span {
    bottom: 8px;
  }
`
