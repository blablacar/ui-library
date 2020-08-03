import React, { useEffect, useRef } from 'react'

import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { GripHandle } from './GripHandle'

export interface GripProps extends A11yProps {
  children?: React.ReactNode
  onSlideUp: () => void
  onSlideDown: () => void
  className?: string
  disabled?: boolean
}

export const SLIDE_OFFSET = 20 // To get more precise with feeling/testing

export const touchEndListener = (
  clientY: number,
  fingerYPosition: React.MutableRefObject<number>,
  resetFingerYPosition: () => void,
  props: GripProps,
) => {
  const { onSlideDown, onSlideUp } = props
  if (fingerYPosition !== null) {
    if (clientY < fingerYPosition.current - SLIDE_OFFSET) {
      onSlideUp()
    } else if (clientY > fingerYPosition.current + SLIDE_OFFSET) {
      onSlideDown()
    }
    resetFingerYPosition()
  }
}

export const Grip = (props: GripProps): JSX.Element => {
  const { onSlideUp, onSlideDown, children = null, className = '', disabled = false } = props
  const a11yAttrs = pickA11yProps(props)
  const fingerYPosition = useRef<number | null>(null)
  const resetFingerYPosition = () => {
    fingerYPosition.current = null
  }

  // Listening to finger being lift from the screen and check position
  // difference with starting point
  useEffect(() => {
    if (!disabled) {
      const delegatedTouchEndListener = (e: TouchEvent) =>
        touchEndListener(
          e.changedTouches.item(0).clientY,
          fingerYPosition,
          resetFingerYPosition,
          props,
        )
      window.addEventListener('touchend', delegatedTouchEndListener)
      return () => {
        window.removeEventListener('touchend', delegatedTouchEndListener)
      }
    }
    return () => {}
  }, [disabled, onSlideUp, onSlideDown])

  return (
    <div
      className={className}
      onTouchStart={e => {
        fingerYPosition.current = e.touches.item(0).clientY
      }}
      {...a11yAttrs}
    >
      <GripHandle aria-hidden="true" />
      {children}
    </div>
  )
}
