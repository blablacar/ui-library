import styled from 'styled-components'
import { color } from '_utils/branding'

import Loader from './Loader'

const StyledLoader = styled(Loader)`
  &.kirk-loader--inline {
    display: inline-block;
  }

  &.kirk-loader--fullScreen {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.85);
    height: 100vh;
    width: 100vw;
    z-index: 4;
  }

  &.kirk-loader--block {
    display: block;
    display: flex;
    justify-content: center;
    padding: 16px 0;
  }

  & .kirk-loader--done {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${color.success};
    color: ${color.white};
    border-radius: 50%;
  }
`

export { LoaderProps, LoaderLayoutMode } from './Loader'
export default StyledLoader
