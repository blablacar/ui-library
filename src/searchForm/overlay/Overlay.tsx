import React, { useRef } from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'

import { useReducedMotion } from '../../_internals/useReducedMotion'
import {
  reducedMotionTransitionDuration,
  TRANSITION_OVERLAY_CLASS_NAME,
  transitionOverlayTimeout,
} from '../transitionConfig'

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
        classNames={TRANSITION_OVERLAY_CLASS_NAME}
        timeout={reducedMotion ? reducedMotionTransitionDuration : transitionOverlayTimeout}
        mountOnEnter
        unmountOnExit
      >
        {children}
      </CSSTransition>
    </div>
  )
}
