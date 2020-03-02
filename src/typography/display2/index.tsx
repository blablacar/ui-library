import styled from 'styled-components'
import { color, font, fontWeight } from '_utils/branding'

import TextDisplay2 from './TextDisplay2'

const StyledTextDisplay2 = styled(TextDisplay2)`
  color: ${color.primaryText};
  font-size: ${font.xxl.size};
  line-height: ${font.xxl.lineHeight};
  font-weight: ${fontWeight.medium};

  &.kirk-text--inverse {
    color: ${color.textWithBackground};
  }
`
export default StyledTextDisplay2
