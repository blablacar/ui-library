import styled from 'styled-components'

import ItemsList from './ItemsList'

const StyledItemsList = styled(ItemsList)`
  & {
    display: flex;
    flex-direction: column;
    list-style-type: none;
  }
`

export { ItemsListDivider, ItemsListProps, ItemsListChild } from './ItemsList'
export default StyledItemsList
