import css from 'styled-jsx/css'
import { space } from '_utils/branding'

export default css`
  .kirk-proximity {
    display: inline-block;
    line-height: 0;
  }

  :global(.kirk-proximity > svg) {
    margin: ${space.s}
  }

  :global(.kirk-proximity svg + svg) {
    margin-left: 0;
  }
`
