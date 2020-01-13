import styled from 'styled-components'
import SubHeader from './SubHeader'
import { font, space } from '_utils/branding'

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
export default StyledSubHeader
