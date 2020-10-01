import React, { useEffect, useRef } from 'react'

import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { GripHandle } from './GripHandle'

export type GripProps = A11yProps &
  Readonly<{
    children?: React.ReactNode
    onSlideUp: () => void
    onSlideDown: () => void
    onTouchMove?: (offset: number) => void
    onTouchEnd?: () => void
    className?: string
    disabled?: boolean
  }>

export const SLIDE_OFFSET = 50

export const touchEndListener = (
  clientY: number,
  fingerYPosition: React.MutableRefObject<number>,
  resetFingerYPosition: () => void,
  props: GripProps,
) => {
  const { onSlideDown, onSlideUp, onTouchEnd } = props
  if (fingerYPosition.current !== null) {
    onTouchEnd()
    if (clientY < fingerYPosition.current - SLIDE_OFFSET) {
      onSlideUp()
    } else if (clientY > fingerYPosition.current + SLIDE_OFFSET) {
      onSlideDown()
    }
    resetFingerYPosition()
  }
}

export const touchMoveListener = (
  clientY: number,
  fingerYPosition: React.MutableRefObject<number>,
  props: GripProps,
) => {
  const { onTouchMove } = props
  if (fingerYPosition.current !== null) {
    onTouchMove(clientY - fingerYPosition.current)
  }
}

export const Grip = (props: GripProps): JSX.Element => {
  const {
    onSlideUp,
    onSlideDown,
    onTouchMove = () => {},
    onTouchEnd = () => {},
    children = null,
    className = '',
    disabled = false,
  } = props
  const a11yAttrs = pickA11yProps(props)
  const fingerYPosition = useRef<number | null>(null)
  const resetFingerYPosition = () => {
    fingerYPosition.current = null
  }

  // Listening to finger moving on the screen and check position
  // difference with starting point
  useEffect(() => {
    if (!disabled) {
      const delegatedTouchMoveListener = (e: TouchEvent) =>
        touchMoveListener(e.changedTouches.item(0).clientY, fingerYPosition, props)
      window.addEventListener('touchmove', delegatedTouchMoveListener)
      return () => {
        window.removeEventListener('touchmove', delegatedTouchMoveListener)
      }
    }
    return () => {}
  }, [disabled, onTouchMove])

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
  }, [disabled, onSlideUp, onSlideDown, onTouchEnd])

  return (
    <div
      className={className}
      onTouchStart={e => {
        console.log('START')
        fingerYPosition.current = e.touches.item(0).clientY
      }}
      {...a11yAttrs}
    >
      <GripHandle aria-hidden="true" />
      {children}
    </div>
  )
}
