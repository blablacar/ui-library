/**
 * Transition config for search form Overlay (used on large devices)
 */
export const TRANSITION_OVERLAY_CLASS_NAME = 'kirk-searchForm-overlay-transition'
export const transitionOverlayTimingFunction = 'cubic-bezier(0.2, 1, 0.2, 1)'
export const enterTransitionOverlayDuration = 350
export const exitTransitionOverlayDuration = 500
export const transitionOverlayTimeout = {
  enter: enterTransitionOverlayDuration,
  exit: exitTransitionOverlayDuration,
}

/**
 * Transition config for search form Section (used on large devices)
 */
export const TRANSITION_SECTION_CLASS_NAME = 'kirk-searchForm-section-transition'
export const enterTransitionSectionDuration = 350
export const exitTransitionSectionDuration = 350
export const transitionSectionTimeout = {
  enter: enterTransitionSectionDuration,
  exit: exitTransitionSectionDuration,
}

/**
 * Global Reduced motion duration
 */
export const reducedMotionTransitionDuration = 0
