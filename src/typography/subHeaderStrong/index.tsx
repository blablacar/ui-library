import styled from 'styled-components'
import { color, font, fontWeight } from '_utils/branding'

import TextSubHeaderStrong from './SubHeader'

const StyledTextSubHeaderStrong = styled(TextSubHeaderStrong)`
  color: ${color.primaryText};
  font-size: ${font.l.size};
  font-weight: ${fontWeight.medium};
  line-height: ${font.l.lineHeight};

  &.kirk-text--inverse {
    color: ${color.textWithBackground};
  }
`
export default StyledTextSubHeaderStrong
