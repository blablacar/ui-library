import styled from 'styled-components'
import { color, font, fontWeight } from '_utils/branding'

import TextTitle from './Title'

const StyledTextTitle = styled(TextTitle)`
  color: ${color.primaryText};
  font-size: ${font.m.size};
  font-weight: ${fontWeight.regular} 
  line-height: ${font.m.lineHeight};

  &.kirk-text--inverse {
    color: ${color.textWithBackground};
  }
`
export default StyledTextTitle
