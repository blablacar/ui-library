import styled from 'styled-components'
import { color, font, fontWeight } from '_utils/branding'

import Text from '../index'

const TextDisplay1 = styled(Text)`
  color: ${color.primaryText};
  font-size: ${font.l.size};
  line-height: ${font.l.lineHeight};
  font-weight: ${fontWeight.medium};
`
export default TextDisplay1
