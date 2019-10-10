import styled from 'styled-components'

import ItemCheckbox from './ItemCheckbox'

const StyledItemCheckbox = styled(ItemCheckbox)`
  & {
    cursor: pointer;
  }

  & input {
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }
`

export { ItemCheckboxStatus } from './ItemCheckbox'
export default StyledItemCheckbox
