import { useState, useContext, useCallback } from 'react'
import { FocusVisibleContext } from '_utils/focusVisibleProvider'

export const useFocusVisible = () => {
  const [isFocused, setIsFocused] = useState(false)
  const hadKeyboardEvent = useContext(FocusVisibleContext)

  const onFocus = useCallback(() => {
    setIsFocused(true)
  }, [isFocused])

  const onBlur = useCallback(() => {
    setIsFocused(false)
  }, [isFocused])

  return {
    focusVisible: hadKeyboardEvent && isFocused,
    onFocus,
    onBlur,
  }
}

export default useFocusVisible
