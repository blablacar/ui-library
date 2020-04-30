import styled from 'styled-components'

import { color } from '_utils/branding'

import TopBar from './TopBar'

const StyledTopBar = styled(TopBar)`
  & {
    position: relative;
    width: 100%;
    background-color: ${color.white};
    display: flex;
    align-items: center;
  }

  &.kirk-topBar--fixed {
    position: fixed;
  }

  &.kirk-topBar--bgTransparent {
    background-color: transparent;
  }
  &.kirk-topBar--bgShadedTransparent {
    background-color: transparent;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
  }

  & .kirk-topBar-left,
  & .kirk-topBar-right {
    flex: 1;
    display: flex;
  }

  & .kirk-topBar-left {
    justify-content: flex-start;
  }

  & .kirk-topBar-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  & .kirk-topBar-right {
    justify-content: flex-end;
  }
`

export { TopBarProps } from './TopBar'
export default StyledTopBar
