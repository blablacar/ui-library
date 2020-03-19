import styled from 'styled-components'
import { color, font, radius, space } from '_utils/branding'

import TripCard from './TripCard'

const StyledTripCard = styled(TripCard)`
  & a {
    display: block;
    height: 100%;
    padding: ${space.l};
    text-decoration: none;
  }

  &.kirk-tripCard--with-badge {
    position: relative;
    padding-top: ${space.xl};
  }

  & .kirk-tripCard-badge {
    position: absolute;
    top: 0;
    background: ${color.primary};
    padding: ${space.s} ${space.m};
    border-radius: 0 0 ${radius.m} ${radius.m};
  }

  & .kirk-item.kirk-tripCard-top-item {
    padding-top: 0;
  }

  & .kirk-item--highlighted .kirk-text-body {
    color: ${color.primary};
  }

  & .kirk-tripCard-title + .kirk-tripCard-mainContainer {
    margin-top: ${space.m};
  }

  & .kirk-tripCard-mainContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  & .kirk-tripCard-main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: ${space.l};
  }

  & .kirk-tripCard-itinerary {
    min-width: 0; /* reset flex default to allow shrinking below content width */
  }

  &.kirk-tripCard--with-price .kirk-tripCard-itinerary {
    padding-right: ${space.m};
  }

  & .kirk-tripCard-price {
    display: block;
    flex-shrink: 0;
  }

  & .kirk-tripCard-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .kirk-tripCard-bottom--only-right {
    justify-content: flex-end;
  }

  & .kirk-tripCard-bottom-left {
    min-width: 0; /* reset flex default to allow shrinking below content width */
  }

  & .kirk-tripCard-bottom-right {
    flex-shrink: 0;
  }

  & .kirk-tripCard-bottom-left + .kirk-tripCard-bottom-right {
    margin-left: ${space.l};
  }

  & .kirk-tripCard-driver,
  & .kirk-tripCard-passengers {
    display: flex;
    align-items: center;
    flex: 1;
    min-width: 0; /* reset flex default to allow shrinking below content width */
  }

  & .kirk-tripCard-driver-info {
    min-width: 0; /* reset flex default to allow shrinking below content width */
  }

  & .kirk-tripCard-driver-name {
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: calc(2 * ${font.m.lineHeight}); /* max 2 lines of text */
  }

  & .kirk-tripCard-ratingContainer {
    display: flex;
    margin-top: ${space.m};
  }

  & .kirk-tripCard-rating {
    margin-left: ${space.m};
  }

  /* We reverse the passengers array to display the 1st one on top without touching z-indexes */
  & .kirk-tripCard-passengers {
    flex-direction: row-reverse;
    justify-content: flex-end;
    list-style-type: none;
  }

  /* To match the width of the time area of the Itinerary */
  & .kirk-tripCard-driver .kirk-tripCard-avatar {
    flex-shrink: 0;
    margin-right: ${space.l};
  }

  & .kirk-tripCard-passengers .kirk-tripCard-avatar {
    margin-right: -${space.m};
  }

  & .kirk-tripCard-passengers .kirk-avatar {
    border: 2px solid ${color.white};
    background: ${color.white};
  }

  & .kirk-tripCard-passengers .kirk-tripCard-passengers-more {
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
`

export { TripCardProps, User } from './TripCard'
export default StyledTripCard
