import css from 'styled-jsx/css'
import { color, font, space, transition } from '_utils/branding'

export default css`
  .dropdownButton {
    position: relative;
    display: inline-block;
  }

  .dropdownButton > button {
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

  :global(.dropdownButton .kirk-icon) {
    transition: transform ${transition.duration.base} ease-out;
  }

  :global(.dropdownButton[open] .kirk-icon) {
      transform: rotate(180deg);
  }

  .dropdown {
    position: absolute;
    top: 100%;
    box-shadow: 0 16px 32px 0 rgba(0, 0, 0, .3);
    width: 350px;
  }

  .dropdown--left {
    left: 0;
  }

  .dropdown--right {
    right: 0;
  }

  .dropdown--withPointer {
    margin-top: ${space.l};
  }

  .dropdown--withPointer::before {
    content: '';
    position: absolute;
    top: -10px;
    display: block;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${color.white};
  }

  .dropdown--left::before {
    left: 24px;
  }

  .dropdown--right::before {
    right: 24px;
  }
`
