import styled from 'styled-components'

import { color, font, transition } from '../../_utils/branding'

export const StyledDropdownButton = styled.div`
  position: relative;
  display: inline-block;

  & > button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${color.blue};
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
