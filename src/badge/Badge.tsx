import React from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

export interface BadgeProps {
  readonly className?: string
  readonly children: string | JSX.Element | number
  readonly ariaLabel?: string
}

export const Badge = ({ className, children, ariaLabel }: BadgeProps) => {
  if (isEmpty(children)) {
    return null
  }

  return (
    <span className={cc(['kirk-badge', className])} aria-label={ariaLabel}>
      <span aria-hidden={!!ariaLabel}>{children}</span>
    </span>
  )
}
