import { useEffect, useRef } from 'react'

import createFocusTrap from 'focus-trap'

import { KEYS } from '../../_utils/keycodes'

/**
 * This custom hook will trap the focus in the component as long.
 * ESC key is listened and will trigger a way out of the focus trap
 * WARNING: You must provide a way out in the UI of your component (e.g a close button on a modal)
 *
 * @param ref The trap will be set in the chidren of the DOM element that it references to
 * @param onClose Callback when ESC key is pressed
 */
export const useFocusTrap = (ref: React.MutableRefObject<HTMLElement>, onClose: () => void) => {
  const elementToReturnFocusTo = useRef(document.activeElement as HTMLElement)

  // Use a Ref to avoid deactivating/activating the trap each time onClose changes.
  const onCloseRef = useRef(onClose)
  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.code === KEYS.ESCAPE) {
        event.stopPropagation()
        onCloseRef.current()
      }
    }

    const focusTrap = createFocusTrap(ref.current)
    focusTrap.activate()
    ref.current.addEventListener('keydown', handleKeydown)
    document.querySelector('html').style.overflow = 'hidden'

    return () => {
      // Wait for next tick so the browser can set the focus on previous element
      setTimeout(() => {
        elementToReturnFocusTo.current.focus()
      })
      focusTrap.deactivate()
      ref.current.removeEventListener('keydown', handleKeydown)
      document.querySelector('html').style.overflow = 'visible'
    }
  }, [])
}
