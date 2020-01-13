import styled from 'styled-components'

import DropdownButton from './DropdownButton'
import { color, font, transition } from '_utils/branding'

const StyledDropdownButton = styled(DropdownButton)`
  & {
    position: relative;
    display: inline-block;
  }

  & > button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${color.primary};
    background: none;
    border: 0;
    font-size: ${font.base.size};
    cursor: pointer;
  }

  & .kirk-icon {
    transition: transform ${transition.duration.base} ease-out;
  }

  &.kirk-dropdownButton--open .kirk-icon {
    transform: rotate(180deg);
  }
`

export { DropdownButtonProps } from './DropdownButton'
export default StyledDropdownButton
