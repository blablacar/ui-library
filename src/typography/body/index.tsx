import styled from 'styled-components'
import { color, font, fontWeight } from '_utils/branding'

import TextStyle from '../index'

const TextBody = styled(TextStyle)`
  color: ${color.secondaryText};
  font-size: ${font.base.size};
  font-weight: ${fontWeight.regular} 
  line-height: ${font.base.lineHeight};
`
export default TextBody
