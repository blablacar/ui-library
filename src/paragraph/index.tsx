import styled from 'styled-components'

import Paragraph from './paragraph'

const StyledParagraph = styled(Paragraph)`
  & {
    display: flex;
    flex-direction: column;
  }

  & .kirk-button {
    align-self: flex-end;
  }
`

export { ParagraphProps } from './paragraph'
export default StyledParagraph
