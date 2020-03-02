import styled from 'styled-components'
import { color, font, fontWeight } from '_utils/branding'

import TextStyle from '../index'

const StyledTextBodyStrong = styled(TextStyle)`
  color: ${color.secondaryText};
  font-size: ${font.base.size};
  font-weight: ${fontWeight.medium};
  line-height: ${font.base.lineHeight};
`
export default StyledTextBodyStrong
