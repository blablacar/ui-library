import styled from 'styled-components'

import { Button } from '../../button'
import { normalizeHorizontally } from '../../layout/layoutNormalizer'

export const StyledCaption = styled.div`
  display: flex;
  ${normalizeHorizontally};

  > * {
    flex: 1 0 auto;
  }

  > * + * {
    text-align: right;
  }

  ${Button} {
    display: inline;
  }
`
