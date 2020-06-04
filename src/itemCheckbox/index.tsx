import styled from 'styled-components'

import { ItemCheckbox } from './ItemCheckbox'

const StyledItemCheckbox = styled(ItemCheckbox)`
  & {
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  }

  & input {
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }
`

export { ItemCheckboxProps, ItemCheckboxStatus } from './ItemCheckbox'
export { StyledItemCheckbox as ItemCheckbox }
export default StyledItemCheckbox
