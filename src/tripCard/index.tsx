import styled from 'styled-components'
import { color, radius, space, componentSizes, transition } from '_utils/branding'

import TripCard from './TripCard'


const StyledTripCard = styled(TripCard)`
  & {
    border-radius: ${radius.l};
    box-shadow: 0 1pt 4pt rgba(0, 0, 0, 0.16), 0 2pt 8pt rgba(0, 0, 0, 0.08);
    list-style-type: none;
    transition: box-shadow ${transition.duration.base} ${transition.easing.default};
  }

  &:hover {
    box-shadow: 0 2pt 8pt rgba(0, 0, 0, 0.08), 0 2pt 16pt rgba(0, 0, 0, 0.08);
  }

  & a {
    display: block;
    padding: ${space.l};
    text-decoration: none;
  }

  &.kirk-tripCard--with-badge {
    position: relative;
    padding-top: ${space.xl};
  }

  .kirk-tripCard-badge {
    position: absolute;
    top: 0;
    background: ${color.primary};
    padding: ${space.s} ${space.m};
    border-radius: 0 0 ${radius.m} ${radius.m};
  }

  .kirk-item.kirk-tripCard-top-item {
    padding-top: 0;
  }
  .kirk-item--highlighted .kirk-text-body {
    color: ${color.primary};
  }

  .kirk-tripCard-title + .kirk-tripCard-main {
    margin-top: ${space.m};
  }

  .kirk-tripCard-main {
    display: flex;
    margin-bottom: ${space.l};
  }

  .kirk-tripCard-itinerary {
    flex: 1;
  }

  &.kirk-tripCard--highlighted .kirk-tripCard-price {
    color: ${color.success};
  }

  .kirk-tripCard-bottom {
    display: flex;
    align-items: center;
  }

  .kirk-tripCard-driver,
  .kirk-tripCard-passengers {
    display: flex;
    align-items: center;
    flex: 1;
    margin-right: ${space.l};
  }

  /* We reverse the passengers array to display the 1st one on top without touching z-indexes */
  .kirk-tripCard-passengers {
    flex-direction: row-reverse;
    justify-content: flex-end;
    list-style-type: none;
  }

  /* To match the width of the time area of the Itinerary */
  .kirk-tripCard-driver .kirk-tripCard-avatar {
    min-width: ${componentSizes.timeWidth};
    margin-right: ${space.l};
  }

  .kirk-tripCard-passengers .kirk-tripCard-avatar {
    margin-right: -${space.m};
  }
  .kirk-tripCard-passengers .kirk-avatar {
    border: 2px solid ${color.white};
    background: ${color.white};
  }
  .kirk-tripCard-passengers .kirk-tripCard-passengers-more {
    background: ${color.iconHighlight};
    border-radius: 50%;
    width: 40px;
    height: 40px;
    border: 2px solid ${color.white};
    line-height: 38px;
    text-align: center;
  }

  & .kirk-tripCard-flags svg {
    display: inline-block;
    margin-left: ${space.m};
  }

  .kirk-tripCard-topText {
    color: ${color.success};
  }
`

export default StyledTripCard
