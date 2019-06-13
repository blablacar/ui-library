import css from 'styled-jsx/css'

export default css`
  :global(.kirk-item-checkbox input) {
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }
  :global(.kirk-item-checkbox) {
    cursor: pointer;
  }
`
