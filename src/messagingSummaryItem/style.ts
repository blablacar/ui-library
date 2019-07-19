import css from 'styled-jsx/css'
import { space } from '_utils/branding'

export default css`
  :global(.kirk-messaging-summary-item) {
    padding-left: ${space.xl};
    padding-right: ${space.xl};
  }
  
  :global(.kirk-messaging-summary-item-sub-label) {
    display: flex;
    align-items: center;
  }
`
