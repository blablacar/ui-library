import styled from 'styled-components'

import { space } from '../../../_utils/branding'
import { normalizeHorizontally } from '../../../layout/layoutNormalizer'

export const StyledCardsStackSection = styled.ul`
  ${normalizeHorizontally};

  & > * {
    margin-bottom: ${space.m};
  }
`
