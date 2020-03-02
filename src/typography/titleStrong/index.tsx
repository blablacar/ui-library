import styled from 'styled-components'
import { color, font, fontWeight } from '_utils/branding'

import TextTitleStrongStrong from './Title'

const StyledTextTitleStrongStrong = styled(TextTitleStrongStrong)`
  color: ${color.primaryText};
  font-size: ${font.m.size};
  line-height: ${font.m.lineHeight};
  font-weight: ${fontWeight.medium};

  &.kirk-text--inverse {
    color: ${color.textWithBackground};
  }
`
export default StyledTextTitleStrongStrong
