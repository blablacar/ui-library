import React, { useEffect, useState } from 'react'

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
  fingerYPosition: number,
  setFingerYPosition: React.Dispatch<number>,
  props: GripProps,
) => {
  const { onSlideDown, onSlideUp, disabled = false } = props
  if (fingerYPosition !== null && !disabled) {
    if (clientY < fingerYPosition - SLIDE_OFFSET) {
      onSlideUp()
    } else if (clientY > fingerYPosition + SLIDE_OFFSET) {
      onSlideDown()
    }
    setFingerYPosition(null)
  }
}

export const Grip = (props: GripProps): JSX.Element => {
  const { children = null, className = '' } = props
  const a11yAttrs = pickA11yProps(props)
  const [fingerYPosition, setFingerYPosition] = useState<number>(null)

  // Listening to finger being lift from the screen and check position
  // difference with starting point
  useEffect(() => {
    const delegatedTouchEndListener = (e: TouchEvent) =>
      touchEndListener(e.changedTouches.item(0).clientY, fingerYPosition, setFingerYPosition, props)
    window.addEventListener('touchend', delegatedTouchEndListener)

    return () => {
      window.removeEventListener('touchend', delegatedTouchEndListener)
    }
  }, []) // empty second argument to emulate componentDidMount/WillUnmount

  return (
    <div
      className={className}
      onTouchStart={e => {
        setFingerYPosition(e.touches.item(0).clientY)
      }}
      {...a11yAttrs}
    >
      <GripHandle aria-hidden="true" />
      {children}
    </div>
  )
}
