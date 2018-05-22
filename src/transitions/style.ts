import css from 'styled-jsx/css'
import { transition } from '_utils/branding'

export default css`
  :global(.fade) {
    transition: ease-in-out ${transition.duration.base};
    transition-property: opacity;
  }

  :global(.fade-entering) {
    opacity: 0;
  }

  :global(.fade-entered) {
    opacity: 1;
  }

  :global(.fade-exiting) {
    opacity: 0;
  }

  :global(.slide-up) {
    transition: ease-in-out ${transition.duration.base};
    transition-property: opacity, transform;
  }

  :global(.slide-up-entering) {
    opacity: 0;
    transform: translateY(50%);
  }

  :global(.slide-up-entered) {
    opacity: 1;
  }

  :global(.slide-up-exiting) {
    opacity: 0;
    transform: translateY(50%);
  }
`
