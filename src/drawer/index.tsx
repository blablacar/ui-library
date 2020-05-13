import styled from 'styled-components'

import { color, transition } from '../_utils/branding'
import Drawer from './Drawer'

const StyledDrawer = styled(Drawer)`
  &.kirk-drawer--open {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  }

  &::after {
    content: '';
    font-size: 0;
  }

  &.kirk-drawer--open::after {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.3);
    transition: background-color ${transition.duration.base} linear;
  }

  &.kirk-drawer--close::after {
    background-color: rgba(0, 0, 0, 0);
  }

  & .kirk-drawer-scrollableContent {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
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
`

export { DrawerProps } from './Drawer'
export default StyledDrawer
