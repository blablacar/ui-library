import css from 'styled-jsx/css'
import { color, space } from '_utils/branding'

export default css`
  :global(.kirk-snackbar-container) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .kirk-snackbar {
    position: fixed;
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 614px;
    margin: 0 auto;
    bottom: 0;
    overflow: hidden;
    background-color: ${color.danger};
    padding: ${space.l} ${space.xl};
    z-index: 1000; /* above the modal */
  }

  :global(.kirk-snackbar-content) {
    flex: 1;
    margin: 0;
    color: ${color.white};
  }

  :global(.kirk-snackbar-cross) {
    padding: 0 0 0 ${space.m};
    display: flex;
    flex-direction: column;
    algin-items: flex-start;
  }
`
