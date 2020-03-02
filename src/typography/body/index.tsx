import styled from 'styled-components'
import { color, font, fontWeight } from '_utils/branding'

import TextBody from './Body'

const StyledTextBody = styled(TextBody)`
  color: ${color.secondaryText};
  font-size: ${font.base.size};
  font-weight: ${fontWeight.regular} 
  line-height: ${font.base.lineHeight};

  &.kirk-text--inverse {
    color: ${color.textWithBackground};
  }
`
export default StyledTextBody
