import styled from 'styled-components'

import { color, font, fontWeight } from '../../_utils/branding'
import { Text } from '../index'

export const TextTitle = styled(Text)`
  color: ${color.midnightGreen};
  font-size: ${font.m.size};
  font-weight: ${fontWeight.regular};
  line-height: ${font.m.lineHeight};
`
