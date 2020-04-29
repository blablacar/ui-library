import styled from 'styled-components'
import { color, font } from '_utils/branding'
import Caption from './Caption'

const StyledCaption = styled(Caption)`
  & {
    font-size: ${font.s.size};
    line-height: ${font.s.lineHeight};
    color: ${color.lightMidnightGreen};
  }
  .kirk-link {
    font-size: ${font.s.size};
    line-height: ${font.s.lineHeight};
    color: ${color.lightMidnightGreen};
  }
`

export { CaptionProps } from './Caption'
export default StyledCaption
