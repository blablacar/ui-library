import styled from 'styled-components'

import ItemRadio from './ItemRadio'

const StyledItemRadio = styled(ItemRadio)`
  & input {
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }
  & {
    cursor: pointer;
  }
`

export default StyledItemRadio
