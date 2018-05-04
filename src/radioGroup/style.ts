import css from 'styled-jsx/css'
import { color } from '_utils/branding'

export default css`
  :global(.kirk-radioGroup--hasHighlight .kirk-radio:not(.kirk-radio--highlighted)) {
    color: ${color.secondaryText};
  }
`
