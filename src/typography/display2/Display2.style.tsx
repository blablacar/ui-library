import styled from 'styled-components'

import { color, font, fontWeight } from '../../_utils/branding'
import { Text } from '../index'

export const TextDisplay2 = styled(Text)`
  color: ${color.midnightGreen};
  font-size: ${font.xxl.size};
  line-height: ${font.xxl.lineHeight};
  font-weight: ${fontWeight.medium};
`
