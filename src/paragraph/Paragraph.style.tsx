import styled from 'styled-components'

import { space } from '../_utils/branding'
import { normalizeHorizontally } from '../layout/layoutNormalizer'

export const StyledParagraph = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${space.m} 0;
  word-break: break-word;
  ${normalizeHorizontally};
`

export const ButtonWrapper = styled.div`
  margin-top: ${space.m};
  text-align: right;

  & > .kirk-button {
    display: inline-block;
  }
`
