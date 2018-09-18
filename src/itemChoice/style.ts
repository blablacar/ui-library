import css from 'styled-jsx/css'
import { color } from '_utils/branding'

export default css`
  :global(.kirk-itemChoice[aria-selected='true']) {
    background-color: ${color.lightBackground};
  }

  /* Label highlighted */
  :global(.kirk-itemChoice--highlighted) {
    color: ${color.primary};
  }

  :global(.kirk-itemChoice--disabled) {
    opacity: 0.3;
  }
`
