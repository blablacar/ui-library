import styled from 'styled-components'

import { color, font, fontWeight } from '../../_utils/branding'
import { Text } from '../index'

export const TextBody = styled(Text)`
  color: ${color.lightMidnightGreen};
  font-size: ${font.base.size};
  font-weight: ${fontWeight.regular};
  line-height: ${font.base.lineHeight};
`
