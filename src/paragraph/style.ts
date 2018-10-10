import css from 'styled-jsx/css'

import { space } from '_utils/branding'

export default css`
  .kirk-paragraph {
    display: flex;
    flex-direction: column;
  }

  .kirk-paragraph .kirk-button {
    align-self: flex-end;
    margin-top: ${space.s}
  }
`
