import styled from 'styled-components'

import { color } from '_utils/branding'

import Text from './Text'

const StyledText = styled(Text)`
  &.kirk-text--inverse {
    color: ${color.textWithBackground};
  }
`

export default StyledText
