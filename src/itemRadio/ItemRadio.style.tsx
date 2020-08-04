import styled from 'styled-components'

import { Item } from '../_internals/item'
import { color, inputBorderSize, space } from '../_utils/branding'

export const StyledItemRadio = styled(Item)`
  & input {
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }
  & {
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
    border: ${inputBorderSize.focus} solid transparent;
    padding: calc(${space.l} - ${inputBorderSize.focus}) auto;
  }
  &.focus {
    border: ${inputBorderSize.focus} solid ${color.blue};
  }
`
