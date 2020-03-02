import styled from 'styled-components'
import { color, font, fontWeight, responsiveBreakpoints } from '_utils/branding'

import TextDisplay1 from './TextDisplay1'

const StyledTextDisplay1 = styled(TextDisplay1)`
  color: ${color.primaryText};
  font-size: ${font.l.size};
  line-height: ${font.l.lineHeight};
  font-weight: ${fontWeight.medium};

  &.kirk-text--inverse {
    color: ${color.textWithBackground};
  }

  @media (${responsiveBreakpoints.isMediaLarge}) {
    & {
      font-size: ${font.xl.size};
      line-height: ${font.xl.lineHeight};
    }
  }
`
export default StyledTextDisplay1
