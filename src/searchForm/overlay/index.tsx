import styled from 'styled-components'

import { componentSizes } from '../../_utils/branding'
import {
  enterTransitionOverlayDuration,
  exitTransitionOverlayDuration,
  reducedMotionTransitionDuration,
  TRANSITION_OVERLAY_CLASS_NAME,
  transitionOverlayTimingFunction,
} from '../transitionConfig'
import { Overlay } from './Overlay'

/**
 *  Basic styles & transitions that apply on all overlays
 * Some of them are adding more transitions (e.g. stepperOverlay)
 */
const StyledOverlay = styled(Overlay)`
  /* Above the search form. */
  z-index: 1;

  & .${TRANSITION_OVERLAY_CLASS_NAME}-enter {
    opacity: 0;
    width: 0;
  }

  & .${TRANSITION_OVERLAY_CLASS_NAME}-enter-active {
    opacity: 1;
    width: ${componentSizes.searchOverlayWidth};
    transition: width ${enterTransitionOverlayDuration}ms ${transitionOverlayTimingFunction},
      opacity ${enterTransitionOverlayDuration}ms ${transitionOverlayTimingFunction},
      left ${enterTransitionOverlayDuration}ms ${transitionOverlayTimingFunction};
  }

  & .${TRANSITION_OVERLAY_CLASS_NAME}-exit {
    opacity: 1;
    width: ${componentSizes.searchOverlayWidth};
  }

  & .${TRANSITION_OVERLAY_CLASS_NAME}-exit-active {
    opacity: 0;
    transition: opacity ${exitTransitionOverlayDuration}ms ${transitionOverlayTimingFunction};
  }

  @media (prefers-reduced-motion: reduce) {
    &
      .${TRANSITION_OVERLAY_CLASS_NAME}-enter-active,
      &
      .${TRANSITION_OVERLAY_CLASS_NAME}-exit-active {
      transition-duration: ${reducedMotionTransitionDuration}ms !important;
    }
  }
`
export { StyledOverlay as Overlay }
