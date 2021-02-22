import styled from 'styled-components'

import { color, font, fontWeight } from '../../_utils/branding'
import { Text } from '../index'

export const TextBrand = styled(Text)`
  color: ${color.midnightGreen};
  font-size: ${font.brand.size};
  font-weight: ${fontWeight.medium};
  line-height: ${font.brand.lineHeight};
`
