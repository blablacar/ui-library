import styled from 'styled-components'
import { color, font, fontWeight } from '_utils/branding'

import TextBodyStrong from './BodyStrong'

const StyledTextBodyStrong = styled(TextBodyStrong)`
  color: ${color.secondaryText};
  font-size: ${font.base.size};
  font-weight: ${fontWeight.medium};
  line-height: ${font.base.lineHeight};

  &.kirk-text--inverse {
    color: ${color.textWithBackground};
  }
`
export default StyledTextBodyStrong
