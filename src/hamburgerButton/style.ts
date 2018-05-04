import css from 'styled-jsx/css'
import { color } from '_utils/branding'

export default css`
  button {
    position: relative;
    min-width: 40px;
    height: 48px;
    border: 0;
    background: transparent;
    color: ${color.primary};
    outline: 0;
    cursor: pointer;
    user-select: none;
  }

  i {
    display: block;
    margin: 0 auto;
    width: 20px;
    height: 2px;
    background-color: currentColor;
    transition: background-color 50ms linear;
    transition-delay: 50ms;
    pointer-events: none;
  }

  i::before,
  i::after {
    content: '';
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background-color: currentColor;
    transition: transform 100ms linear;
    z-index: inherit;
  }

  i::before {
    transform: translateY(-6px);
  }

  i::after {
    transform: translateY(6px);
  }

  button[aria-expanded="true"] i {
    background-color: transparent;
    transition-delay: unset;
  }

  button[aria-expanded="true"] i::before {
    transform: translateY(0) rotate(135deg);
  }

  button[aria-expanded="true"] i::after {
    transform: translateY(0) rotate(45deg);
  }
`
