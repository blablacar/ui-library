import React from 'react'
import cc from 'classcat'

import { useFocusVisible } from '../_utils/focusVisibleProvider/useFocusVisible'
import { QuestionIcon } from '../icon/questionIcon'
import { StyledWhy, StyledWhyWrapper } from './TheWhy.style'

export type TheWhyProps = Readonly<{
  children: string
  title: string
  className?: string
  onClick?: () => void
}>

export const TheWhy = ({ className, children, title, onClick }: TheWhyProps) => {
  const { focusVisible, onFocus, onBlur } = useFocusVisible()
  return (
    <StyledWhyWrapper className={cc(['kirk-why', className])}>
      <StyledWhy
        type="button"
        className={cc([
          {
            'focus-visible': focusVisible,
          },
        ])}
        title={title}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        <QuestionIcon />
        <span>{children}</span>
      </StyledWhy>
    </StyledWhyWrapper>
  )
}
