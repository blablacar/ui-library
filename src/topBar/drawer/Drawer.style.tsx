import styled from 'styled-components'

import { color, componentSizes, responsiveBreakpoints, transition } from '../../_utils/branding'

export const StyledDrawer = styled.aside<{ $zIndex?: number }>`
  /* z-index handled in main application */

  &.kirk-drawer--open {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: ${props =>
      props.$zIndex}; /* z-index defined in main application, above dimmer - below topBar */
    visibility: visible;
    transition-delay: 0;
  }

  &.kirk-drawer--close {
    visibility: hidden; /* Hiding the drawer when closed, otherwise on mac/ios we can scroll top off screen and see it */
    transition-delay: 300ms;
    transition-property: visibility;
  }

  & .kirk-drawer-scrollableContent {
    position: absolute;
    z-index: 2;
    left: 0;
    top: ${componentSizes.headerHeight.small};
    bottom: 0;
    overflow-y: auto;
    background-color: ${color.white};
    transition: transform ${transition.duration.base} ease-in-out;
    will-change: transform;
    transform: translateY(-100%);
    max-width: 100%;
    -webkit-overflow-scrolling: touch;
  }

  &.kirk-drawer--open .kirk-drawer-scrollableContent {
    box-shadow: 0 36px 36px 0 rgba(0, 0, 0, 0.3);
    transform: translateY(0%);
  }

  &.kirk-drawer--close .kirk-drawer-scrollableContent {
    transform: translateY(-100%);
  }

  @media (${responsiveBreakpoints.isMediaLarge}) {
    && {
      left: 50%;
      right: auto;
      top: 0;
      bottom: 0;
      width: 100%;
      width: ${componentSizes.headerWidth.large};
      position: fixed;
      transform: translate(-50%, 0);
    }

    .kirk-drawer-scrollableContent {
      top: ${componentSizes.headerHeight.large};
      left: auto;
      right: auto;
      width: ${componentSizes.drawerWidth.large};
      float: right;
      position: relative;
    }

    &.kirk-drawer--close .kirk-drawer-scrollableContent {
      transform: translateY(-100vh);
    }
  }
`

export const StyledDimmer = styled.div<{ $zIndex: number }>`
  visibility: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0;
  transition: opacity 350ms cubic-bezier(0.455, 0.03, 0.515, 0.955);

  &.kirk-drawer-dimmer--active {
    visibility: visible;
    opacity: 0.07;
    z-index: ${props => props.$zIndex}; /* z-index defined in main application, below drawer */
  }
`
