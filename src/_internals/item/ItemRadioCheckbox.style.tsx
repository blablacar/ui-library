import styled from 'styled-components'

import { color, inputBorderSize } from '../../_utils/branding'
import { Item } from './index'

export const ItemRadioCheckbox = styled(Item)`
  & {
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
    border: ${inputBorderSize.focus} solid transparent;
  }

  &.focus-visible {
    outline: ${inputBorderSize.focus} solid ${color.blue};
  }

  & input {
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }
`
