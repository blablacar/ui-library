import styled from 'styled-components'
import { color, font, fontWeight } from '_utils/branding'

import Text from '../index'

const StyledTextTitleStrongStrong = styled(Text)`
  color: ${color.primaryText};
  font-size: ${font.m.size};
  line-height: ${font.m.lineHeight};
  font-weight: ${fontWeight.medium};
`
export default StyledTextTitleStrongStrong
