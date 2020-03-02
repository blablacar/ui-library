import styled from 'styled-components'
import { color, font, fontWeight } from '_utils/branding'

import Text from '../index'

const StyledTextDisplay2 = styled(Text)`
  color: ${color.primaryText};
  font-size: ${font.xxl.size};
  line-height: ${font.xxl.lineHeight};
  font-weight: ${fontWeight.medium};

  &.kirk-text--inverse {
    color: ${color.textWithBackground};
  }
`
export default StyledTextDisplay2
