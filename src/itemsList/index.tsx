import styled from 'styled-components'
import { space, color } from '_utils/branding'

import ItemsList from './ItemsList'

const StyledItemsList = styled(ItemsList)`
  & {
    display: flex;
    flex-direction: column;
    list-style-type: none;
  }
  &.kirk-items-list--withSeparators .kirk-items-list-item + .kirk-items-list-item,
  & .kirk-items-list-item--withSeparator {
    margin-top: ${space.l};
    position: relative;
  }
  &.kirk-items-list--withSeparators .kirk-items-list-item + .kirk-items-list-item::before,
  & .kirk-items-list-item--withSeparator::before {
    content: '';
    position: absolute;
    top: -8px;
    right: 0px;
    left: 0px;
    border-bottom: 1px solid ${color.divider};
  }
`

export { ItemsListDivider } from './ItemsList'
export default StyledItemsList
