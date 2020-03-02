import styled from 'styled-components'
import { color, font, fontWeight } from '_utils/branding'

import TextDisplay1 from './TextDisplay1'

const StyledTextDisplay1 = styled(TextDisplay1)`
  color: ${color.primaryText};
  font-size: ${font.xl.size};
  line-height: ${font.xl.lineHeight};
  font-weight: ${fontWeight.medium};

  &.kirk-text--inverse {
    color: ${color.textWithBackground};
  }
`
export default StyledTextDisplay1
