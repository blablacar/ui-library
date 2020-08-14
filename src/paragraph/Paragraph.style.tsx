import styled from 'styled-components'

import { space } from '../_utils/branding'

export const StyledParagraph = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${space.m} 0;
  word-break: break-word;

  & .kirk-button {
    align-self: flex-end;
  }
`
