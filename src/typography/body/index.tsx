import styled from 'styled-components'

import { color, font, fontWeight } from '../../_utils/branding'
import { Text as TextStyle } from '../index'

export const TextBody = styled(TextStyle)`
  color: ${color.lightMidnightGreen};
  font-size: ${font.base.size};
  font-weight: ${fontWeight.regular};
  line-height: ${font.base.lineHeight};
`
