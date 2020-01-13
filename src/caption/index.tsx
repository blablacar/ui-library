import styled from 'styled-components'
import { color, font } from '_utils/branding'
import Caption from './Caption'

const StyledCaption = styled(Caption)`
  & {
    font-size: ${font.s.size};
    line-height: ${font.s.lineHeight};
    color: ${color.secondaryText};
  }
  .kirk-link {
    font-size: ${font.s.size};
    line-height: ${font.s.lineHeight};
    color: ${color.secondaryText};
  }
`

export { CaptionProps } from './Caption'
export default StyledCaption
