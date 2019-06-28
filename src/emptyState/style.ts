import css from 'styled-jsx/css'
import { space } from '_utils/branding'

export default css`
  .kirk-empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: center;
  }

  :global(.kirk-empty-state .kirk-title) {
    margin: ${space.xl} 0;
  }

  .kirk-empty-state img {
    max-height: 33vh;
    width: 100%;
    object-fit: contain;
  }
`
