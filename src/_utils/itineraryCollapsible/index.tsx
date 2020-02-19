import styled from 'styled-components'
import { color, font, radius, space, componentSizes, transition } from '_utils/branding'

import ItineraryCollapsible from './ItineraryCollapsible'

const minHeight = '40px'
const smallBulletPositionDifference = `${Math.ceil(
  (parseInt(componentSizes.bulletSize, 10) - parseInt(componentSizes.bulletSizeSmall, 10)) / 2,
)}px`

const StyledItineraryCollapsible = styled(ItineraryCollapsible)`
  & {
    position: relative;
    display: block;
    list-style-type: none;
    cursor: pointer;
    min-height: ${minHeight};
  }

  &.kirk-itineraryCollapsible--extended .kirk-itineraryCollapsible-collapsed,
  &.kirk-itineraryCollapsible--collapsed .kirk-itineraryCollapsible-extended {
    opacity: 0;
    height: ${minHeight} !important; /* must take priority over the real height specified inline */
    overflow: hidden;
  }

  .kirk-itineraryCollapsible-collapsed,
  .kirk-itineraryCollapsible-extended {
    opacity: 1;
    transition: height ${transition.duration.base} ease-in-out,
      opacity ${transition.duration.base} linear;
  }

  & .kirk-itineraryCollapsible-collapsed {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    padding: ${space.m} 0;
    height: ${minHeight};
    background-color: ${color.white};
  }

  & .kirk-itineraryCollapsible-collapsed::before,
  & .kirk-itineraryCollapsible-collapsed::after {
    content: '';
    position: absolute;
    top: 0;
    left: 2px;
    width: ${componentSizes.roadWidth};
    height: 4px;
    background-color: ${color.primaryText};
    border-radius: ${radius.s};
  }

  & .kirk-itineraryCollapsible-collapsed::before {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  & .kirk-itineraryCollapsible-collapsed::after {
    top: 30px;
    height: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  & .kirk-itineraryCollapsible-collapsed .kirk-bullet {
    position: relative;
    top: 6px;
    left: 0;
  }

  & .kirk-itineraryCollapsible-extended .kirk-bullet {
    top: ${smallBulletPositionDifference};
  }

  & .kirk-itineraryCollapsible-collapsed .kirk-text {
    padding-left: ${space.m};
    height: ${font.m.lineHeight};
  }

  & .kirk-itineraryLocation-wrapper .kirk-itineraryLocation-road {
    height: calc(
      100% - ${componentSizes.bulletSizeSmall} + 4px
    ); /* +4px to better hide behind small Bullets */
  }

  & .kirk-itineraryLocation-roadContainer {
    margin-top: 0;
  }

  & .kirk-itineraryLocation-wrapper {
    padding: 0;
  }
`
export { ItineraryCollapsibleProps } from './ItineraryCollapsible'
export default StyledItineraryCollapsible
