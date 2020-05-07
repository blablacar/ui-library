import styled from 'styled-components'

import { componentSizes } from '_utils/branding'

import Overlay, {
  enterTransitionDuration,
  exitTransitionDuration,
  reducedMotionTransitionDuration,
  TRANSITION_CLASS_NAME,
} from './Overlay'

export const transitionTimingFunction = 'cubic-bezier(0.2, 1, 0.2, 1)'

/**
 *  Basic styles & transitions that apply on all overlays
 * Some of them are adding more transitions (e.g. stepperOverlay)
 */
const StyledOverlay = styled(Overlay)`
  & .${TRANSITION_CLASS_NAME}-enter {
    opacity: 0;
    width: 0;
  }

  & .${TRANSITION_CLASS_NAME}-enter-active {
    opacity: 1;
    width: ${componentSizes.searchOverlayWidth};
    transition: width ${enterTransitionDuration}ms ${transitionTimingFunction},
      opacity ${enterTransitionDuration}ms ${transitionTimingFunction},
      left ${enterTransitionDuration}ms ${transitionTimingFunction};
  }

  & .${TRANSITION_CLASS_NAME}-exit {
    opacity: 1;
    width: ${componentSizes.searchOverlayWidth};
  }

  & .${TRANSITION_CLASS_NAME}-exit-active {
    opacity: 0;
    transition: opacity ${exitTransitionDuration}ms ${transitionTimingFunction};
  }

  @media (prefers-reduced-motion: reduce) {
    & .${TRANSITION_CLASS_NAME}-enter-active, & .${TRANSITION_CLASS_NAME}-exit-active {
      transition-duration: ${reducedMotionTransitionDuration}ms !important;
    }
  }
`
export default StyledOverlay
