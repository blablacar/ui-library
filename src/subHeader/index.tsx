import styled from 'styled-components'

import { font, space } from '../_utils/branding'
import { SubHeader } from './SubHeader'

const StyledSubHeader = styled(SubHeader)`
  & {
    font-size: ${font.l.size};
    line-height: ${font.l.lineHeight};
    padding-top: ${space.xl};
    padding-bottom: ${space.m};
    margin: 0;
  }
`

export { SubHeaderProps } from './SubHeader'
export { StyledSubHeader as SubHeader }
export default StyledSubHeader
