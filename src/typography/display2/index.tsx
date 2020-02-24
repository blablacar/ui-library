import styled from 'styled-components'
import { color } from '_utils/branding'

import TextDisplay2 from './TextDisplay2'

const StyledTextDisplay2 = styled(TextDisplay2)`
  &.kirk-text--inverse {
    color: ${color.textWithBackground};
  }
`
export default StyledTextDisplay2
