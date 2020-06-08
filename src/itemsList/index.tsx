import styled from 'styled-components'

import { ItemsList } from './ItemsList'

const StyledItemsList = styled(ItemsList)`
  & {
    display: flex;
    flex-direction: column;
    list-style-type: none;
  }
`

export { ItemsListDivider, ItemsListProps, ItemsListChild } from './ItemsList'
export { StyledItemsList as ItemsList }
export default StyledItemsList
