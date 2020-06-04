import styled from 'styled-components'

import { color, font, fontWeight } from '../../_utils/branding'
import { Text } from '../index'

export const TextCaption = styled(Text)`
  color: ${color.lightMidnightGreen};
  font-size: ${font.s.size};
  font-weight: ${fontWeight.regular};
  line-height: ${font.s.lineHeight};
`
