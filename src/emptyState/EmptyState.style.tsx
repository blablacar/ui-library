import styled from 'styled-components'

import { space } from '../_utils/branding'

export const StyledEmptyState = styled.div`
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
