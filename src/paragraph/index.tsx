import styled from 'styled-components'

import { space } from '../_utils/branding'
import { normalizeHorizontally } from '../layout/layoutNormalizer'
import { Paragraph } from './paragraph'

const StyledParagraph = styled(Paragraph)`
  & {
    display: flex;
    flex-direction: column;
    padding: ${space.m} 0;
    word-break: break-word;
    ${normalizeHorizontally}
  }

  & .kirk-button {
    align-self: flex-end;
  }
`

export { ParagraphProps } from './paragraph'
export { StyledParagraph as Paragraph }
export default StyledParagraph
