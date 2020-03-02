import styled from 'styled-components'
import { color, font, fontWeight } from '_utils/branding'

import TextSubHeader from './SubHeader'

const StyledTextSubHeader = styled(TextSubHeader)`
  color: ${color.primaryText};
  font-size: ${font.l.size};
  font-weight: ${fontWeight.regular} 
  line-height: ${font.l.lineHeight};

  &.kirk-text--inverse {
    color: ${color.textWithBackground};
  }
`
export default StyledTextSubHeader
