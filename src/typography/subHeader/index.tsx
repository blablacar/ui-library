import styled from 'styled-components'
import { color, font, fontWeight } from '_utils/branding'

import Text from '../index'

const TextSubHeader = styled(Text)`
  color: ${color.primaryText};
  font-size: ${font.l.size};
  font-weight: ${fontWeight.regular} 
  line-height: ${font.l.lineHeight};
`
export default TextSubHeader
