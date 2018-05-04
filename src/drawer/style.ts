import css from 'styled-jsx/css'
import { color, transition } from '_utils/branding'

export default css`
  .drawer {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .drawer::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 150ms linear;
  }

  .drawer--open::after {
    background-color: rgba(0, 0, 0, .3);
  }

  .drawer--close::after {
    background-color: rgba(0, 0, 0, 0);
  }

  .scrollableContent {
    position: absolute;
    z-index: 1050;
    top: 0;
    left: 0;
    bottom: 0;
    overflow-y: auto;
    background-color: ${color.white};
    box-shadow: 0 36px 36px 0 rgba(0, 0, 0, .3);
    transition: transform ${transition.duration.base} ease-in-out;
    will-change: transform;
    transform: translateX(-100%);
    max-width: 100%;
    -webkit-overflow-scrolling: touch;
  }

  .drawer--open .scrollableContent {
    transform: translateX(0%);
  }

  .drawer--close .scrollableContent {
    transform: translateX(-100%);
  }
`
