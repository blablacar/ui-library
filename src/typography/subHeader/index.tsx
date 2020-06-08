import styled from 'styled-components'

import { color, font, fontWeight } from '../../_utils/branding'
import { Text } from '../index'

export const TextSubHeader = styled(Text)`
  color: ${color.midnightGreen};
  font-size: ${font.l.size};
  font-weight: ${fontWeight.regular};
  line-height: ${font.l.lineHeight};
`
