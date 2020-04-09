import React, { ReactNode, createContext, useEffect, useState } from 'react'

import { KEYS, KEYS_TRIGGERING_KEYBOARD_NAVIGATION } from '_utils/keycodes'

// A React hook based on: https://github.com/WICG/focus-visible

const pointerMoveEventList = [
  'mousedown',
  'mouseup',
  'pointermove',
  'pointerdown',
  'pointerup',
  'touchmove',
  'touchstart',
  'touchend',
]

const pointerDownEventList = ['mousedown', 'pointerdown', 'touchstart']

type FocusVisibleProviderProps = {
  children: ReactNode
}

export const FocusVisibleContext = createContext(false)

export const FocusVisibleProvider = ({ children }: FocusVisibleProviderProps) => {
  /* When the provider first loads, assume the user is in pointer modality. */
  const [hadKeyboardEvent, setHadKeyboardEvent] = useState(false)

  useEffect(() => {
    let lastClientX: Number
    let lastClientY: Number

    const onPointerDown = () => {
      setHadKeyboardEvent(false)
    }

    const onInitialPointerMove = () => {
      setHadKeyboardEvent(false)
    }

    const getLastMouseMove = (e: MouseEvent) => {
      // Ensure the mouse has actually moved (Safari)
      // https://transitory.technology/mouse-move-in-safari/
      if (lastClientX === e.clientX && lastClientY === e.clientY) {
        return
      }

      lastClientX = e.clientX
      lastClientY = e.clientY
    }

    const addInitialPointerMoveListeners = () => {
      document.addEventListener('mousemove', (event: MouseEvent) => {
        getLastMouseMove(event)
        onInitialPointerMove
      })

      pointerMoveEventList.forEach(e => document.addEventListener(e, onInitialPointerMove))
    }

    const removeInitialPointerMoveListeners = () => {
      document.removeEventListener('mousemove', (event: MouseEvent) => {
        getLastMouseMove(event)
        onInitialPointerMove
      })

      pointerMoveEventList.forEach(e => document.removeEventListener(e, onInitialPointerMove))
    }

    const onKeyDown = (e: KeyboardEvent) => {
      const element = e.target as HTMLInputElement
      const isTypingArea =
        element.tagName === 'TEXTAREA' || (element.tagName === 'INPUT' && element.type === 'text')
      // Remove Spacebar and Enter keys in case of text editing
      const keysList = isTypingArea
        ? KEYS_TRIGGERING_KEYBOARD_NAVIGATION.filter(
            key => key !== KEYS.SPACEBAR && key !== KEYS.ENTER,
          )
        : KEYS_TRIGGERING_KEYBOARD_NAVIGATION

      if (keysList.includes(e.key)) {
        setHadKeyboardEvent(true)
      }
    }

    // For some kinds of state, we are interested in changes at the global
    // scope only. Global pointer input and global key presses change
    // should affect the state at every scope.
    document.addEventListener('keydown', onKeyDown, true)
    pointerDownEventList.forEach(e => document.addEventListener(e, onPointerDown, true))
    addInitialPointerMoveListeners()

    return () => {
      document.removeEventListener('keydown', onKeyDown, true)
      pointerDownEventList.forEach(e => document.removeEventListener(e, onPointerDown, true))
      removeInitialPointerMoveListeners()
    }
  }, [])

  return (
    <FocusVisibleContext.Provider value={hadKeyboardEvent}>{children}</FocusVisibleContext.Provider>
  )
}

export default FocusVisibleProvider
