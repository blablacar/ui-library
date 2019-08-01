import styled from 'styled-components'

import EmptyState from './EmptyState'
import { space } from '_utils/branding'

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

export default StyledEmptyState
