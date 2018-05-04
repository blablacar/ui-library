import css from 'styled-jsx/css'
import { color, font } from '_utils/branding'

export default css`
  :global(.kirk-title) {
    color: ${color.primaryText};
    font-size: ${font.xl.size};
    font-weight: 500;
    line-height: ${font.xl.lineHeight};
  }
`
