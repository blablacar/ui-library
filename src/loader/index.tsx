import styled from 'styled-components'
import { color } from '_utils/branding'

import Loader from './Loader'

const StyledLoader = styled(Loader)`
  & {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.kirk-loader--fullScreen {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.85);
    height: 100vh;
    width: 100vw;
    z-index: 4;
  }

  &.kirk-loader--done {
    background-color: ${color.success};
    color: ${color.white};
    border-radius: 50%;
  }
`

export default StyledLoader
