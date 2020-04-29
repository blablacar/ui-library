import styled from 'styled-components'

import { color, inputBorderSize, space } from '_utils/branding'
import ItemRadio from './ItemRadio'

const StyledItemRadio = styled(ItemRadio)`
  & input {
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }
  & {
    cursor: pointer;
    border: ${inputBorderSize.focus} solid transparent;
    padding: calc(${space.l} - ${inputBorderSize.focus}) 0;
  }
  &.focus {
    border: ${inputBorderSize.focus} solid ${color.blue};
  }
`

export { ItemRadioProps, ItemRadioStatus } from './ItemRadio'
export default StyledItemRadio
