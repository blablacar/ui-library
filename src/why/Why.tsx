import React from 'react'
import cc from 'classcat'

import QuestionIcon from 'icon/questionIcon'

export interface WhyProps {
  readonly children: string
  readonly title: string
  readonly className?: string
  readonly onClick?: () => void
}

const Why = ({ className, children, title, onClick }: WhyProps) => (
  <button type="button" className={cc(['kirk-why', className])} title={title} onClick={onClick}>
    <QuestionIcon />
    <span>{children}</span>
  </button>
)

export default Why
