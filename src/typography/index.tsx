import styled from 'styled-components'

import { color } from '_utils/branding'

import Text from './Text'

const StyledText = styled(Text)`
  & {
    color: ${props => (props.isInverted ? color.textWithBackground : '')};
  }
`

export default StyledText
