import { useEffect } from 'react'

const DEFAULT_OVERFLOW_VALUE = 'visible'
const OVERFLOW_HIDDEN_VALUE = 'hidden'

/**
 * This custom hook will remove the overflow visible from the document
 * It's useful for modal or any screen that wants to handle their own scrollbar
 * WARNING: For now it doesn't handle 2 components using this hooks at the same time
 */
export const useOverflowHiddenOnDocument = () => {
  useEffect(() => {
    document.querySelector('html').style.overflow = OVERFLOW_HIDDEN_VALUE
    return () => {
      document.querySelector('html').style.overflow = DEFAULT_OVERFLOW_VALUE
    }
  }, [])
}

export default useOverflowHiddenOnDocument
