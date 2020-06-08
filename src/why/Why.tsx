import React from 'react'
import cc from 'classcat'

import { useFocusVisible } from '../_utils/focusVisibleProvider/useFocusVisible'
import { QuestionIcon } from '../icon/questionIcon'

export interface WhyProps {
  readonly children: string
  readonly title: string
  readonly className?: string
  readonly onClick?: () => void
}

export const Why = ({ className, children, title, onClick }: WhyProps) => {
  const { focusVisible, onFocus, onBlur } = useFocusVisible()
  return (
    <button
      type="button"
      className={cc([
        'kirk-why',
        {
          'focus-visible': focusVisible,
        },
        className,
      ])}
      title={title}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <QuestionIcon />
      <span>{children}</span>
    </button>
  )
}
