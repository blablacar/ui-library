import styled from 'styled-components'
import { color, font, fontWeight } from '_utils/branding'

import TextCaption from './Caption'

const StyledTextCaption = styled(TextCaption)`
  color: ${color.secondaryText};
  font-size: ${font.s.size};
  font-weight: ${fontWeight.regular};
  line-height: ${font.s.lineHeight};

  &.kirk-text--inverse {
    color: ${color.textWithBackground};
  }
`
export default StyledTextCaption
