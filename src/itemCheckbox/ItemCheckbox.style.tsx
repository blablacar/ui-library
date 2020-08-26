import styled from 'styled-components'

import { Item } from '../_internals/item'
import { color, inputBorderSize } from '../_utils/branding'

export const StyledItemCheckbox = styled(Item)`
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};

  &.focus-visible {
    outline: ${inputBorderSize.focus} solid ${color.blue};
  }

  & input {
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }
`
