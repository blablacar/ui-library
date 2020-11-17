import React from 'react'
import cc from 'classcat'

import { useFocusVisible } from '../_utils/focusVisibleProvider/useFocusVisible'
import { QuestionIcon } from '../icon/questionIcon'
import { StyledWhy } from './Why.style'

type WhyProps = Readonly<{
  children: string
  title: string
  className?: string
  onClick?: () => void
}>

export const Why = ({ className, children, title, onClick }: WhyProps) => {
  const { focusVisible, onFocus, onBlur } = useFocusVisible()
  return (
    <StyledWhy
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
    </StyledWhy>
  )
}
