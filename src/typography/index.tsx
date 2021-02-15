import styled from 'styled-components'

import { color } from '../_utils/branding'
import { Text } from './Text'

const StyledText = styled(Text)`
  white-space: pre-line;

  & {
    color: ${props => (props.isInverted ? color.white : '')};
  }
`

export { StyledText as Text }
