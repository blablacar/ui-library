import css from 'styled-jsx/css'
import { color, font, transition } from '_utils/branding'

export default css`
  .kirk-dropdownButton {
    position: relative;
    display: inline-block;
  }

  .kirk-dropdownButton > button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${color.primary};
    background: none;
    border: 0;
    outline: 0;
    font-size: ${font.base.size};
    cursor: pointer;
  }

  :global(.kirk-dropdownButton .kirk-icon) {
    transition: transform ${transition.duration.base} ease-out;
  }

  :global(.kirk-dropdownButton--open .kirk-icon) {
    transform: rotate(180deg);
  }
`
