import styled from 'styled-components'
import { color, font, fontWeight } from '_utils/branding'

import Text from '../index'

const TextDisplay2 = styled(Text)`
  color: ${color.primaryText};
  font-size: ${font.xxl.size};
  line-height: ${font.xxl.lineHeight};
  font-weight: ${fontWeight.medium};
`
export default TextDisplay2
