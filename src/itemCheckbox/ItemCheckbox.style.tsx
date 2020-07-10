import styled from 'styled-components'

import { Item } from '../_internals/item'

export const StyledItemCheckbox = styled(Item)`
  & {
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  }

  & input {
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }
`
