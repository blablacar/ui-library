import styled from 'styled-components'

import ItemsSection from './itemsSection'

const StyledItemsSection = styled(ItemsSection)`
  & .kirk-items-section-content {
    display: flex;
  }
`

export { ItemsSectionProps } from './itemsSection'
export default StyledItemsSection
