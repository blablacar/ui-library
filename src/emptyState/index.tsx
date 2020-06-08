import styled from 'styled-components'

import { space } from '../_utils/branding'
import { EmptyState } from './EmptyState'

const StyledEmptyState = styled(EmptyState)`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: center;
  }

  & .kirk-title {
    margin: ${space.xl} 0;
  }

  & img {
    max-height: 33vh;
    width: 100%;
    object-fit: contain;
  }
`

export { EmptyStateProps } from './EmptyState'
export { StyledEmptyState as EmptyState }
export default StyledEmptyState
