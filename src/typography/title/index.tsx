import styled from 'styled-components'
import { color, font, fontWeight } from '_utils/branding'

import Text from '../index'

const TextTitle = styled(Text)`
  color: ${color.primaryText};
  font-size: ${font.m.size};
  font-weight: ${fontWeight.regular} 
  line-height: ${font.m.lineHeight};
`
export default TextTitle
