import styled from 'styled-components'

import { Item } from '../_internals/item'
import { color, inputBorderSize, space } from '../_utils/branding'

export const StyledItemRadio = styled(Item)`
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  border: ${inputBorderSize.focus} solid transparent;
  padding: calc(${space.l} - ${inputBorderSize.focus}) auto;

  input {
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }
  &.focus {
    border: ${inputBorderSize.focus} solid ${color.blue};
  }
`
