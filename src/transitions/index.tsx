import styled from 'styled-components'

import { transition } from '../_utils/branding'
import { Transitions } from './Transitions'

const StyledTransitions = styled(Transitions)`
  &.fade {
    transition: ease-in-out ${transition.duration.base};
    transition-property: opacity;
  }

  &.fade-entering {
    opacity: 0;
  }

  &.fade-entered {
    opacity: 1;
  }

  &.fade-exiting {
    opacity: 0;
  }

  &.slide-up {
    transition: ease-in-out ${transition.duration.base};
    transition-property: opacity, transform;
  }

  &.slide-up-entering {
    opacity: 0;
    transform: translateY(50%);
  }

  &.slide-up-entered {
    opacity: 1;
  }

  &.slide-up-exiting {
    opacity: 0;
    transform: translateY(50%);
  }
`

export { AnimationType, TransitionsProps } from './Transitions'
export { StyledTransitions as Transitions }
