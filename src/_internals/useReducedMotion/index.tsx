import { useEffect, useState } from 'react'

/**
 * This custom hook will return reduced motion boolean
 * To be used to disable animation based on user preferences
 * https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
 *
 */
export const useReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion)').matches)
  }, [])

  return reducedMotion
}
