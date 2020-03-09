import styled from 'styled-components'
import { color, font, fontWeight } from '_utils/branding'

import Text from '../index'

const StyledTextCaption = styled(Text)`
  color: ${color.secondaryText};
  font-size: ${font.s.size};
  font-weight: ${fontWeight.regular};
  line-height: ${font.s.lineHeight};
`
export default StyledTextCaption
