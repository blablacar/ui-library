import styled from 'styled-components'

import ToggleButton from './ToggleButton'

const StyledToggleButton = styled(ToggleButton)`
  & {
    display: block;
    margin: 0;
    padding: 0;
    background: none;
    width: 100%;
    border: 0;
    text-align: left;
    font-family: inherit;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
  }

  &:active {
    outline: 0;
  }
`
export { ToggleButtonProps, ToggleButtonStatus } from './ToggleButton'
export default StyledToggleButton
