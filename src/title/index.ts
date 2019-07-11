import styled from 'styled-components'
import { color, font } from '_utils/branding'

import Title from './Title'

const StyledTitle = styled(Title)`
  & {
    color: ${color.primaryText};
    font-size: ${font.xl.size};
    font-weight: 500;
    line-height: ${font.xl.lineHeight};
  }
`

export { isHeadingAvailable } from './Title'
export default StyledTitle
