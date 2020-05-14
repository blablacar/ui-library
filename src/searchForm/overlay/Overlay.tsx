import React, { useRef } from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'

import useReducedMotion from '../../_utils/useReducedMotion'

export const enterTransitionDuration = 350
export const exitTransitionDuration = 500
export const reducedMotionTransitionDuration = 0
export const TRANSITION_CLASS_NAME = 'kirk-searchForm-overlay-transition'

const overlayTimeout = {
  enter: enterTransitionDuration,
  exit: exitTransitionDuration,
}

type OverlayProps = {
  closeOnBlur: () => void
  shouldDisplay: boolean
  children: React.ReactNode
  className: string
}

export const Overlay = ({ closeOnBlur, shouldDisplay, children, className }: OverlayProps) => {
  const overlayRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  return (
    <div
      ref={overlayRef}
      onBlur={evt => {
        if (!overlayRef.current.contains(evt.relatedTarget as Node)) {
          closeOnBlur()
        }
      }}
      className={className}
    >
      <CSSTransition
        in={shouldDisplay}
        classNames={TRANSITION_CLASS_NAME}
        timeout={reducedMotion ? reducedMotionTransitionDuration : overlayTimeout}
        mountOnEnter
        unmountOnExit
      >
        {children}
      </CSSTransition>
    </div>
  )
}

export default Overlay
