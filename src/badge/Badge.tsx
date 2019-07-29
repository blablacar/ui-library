import React from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

interface BadgeProps {
  readonly className?: Classcat.Class
  readonly extraClassName?: Classcat.Class
  readonly children: string | JSX.Element | number
  readonly ariaLabel?: string
}

const Badge = ({ className, extraClassName, children, ariaLabel }: BadgeProps) => {
  if (isEmpty(children)) {
    return null
  }

  return (
    <span className={cc(['kirk-badge', className, extraClassName])} aria-label={ariaLabel}>
      <span aria-hidden={!!ariaLabel}>{children}</span>
    </span>
  )
}

export default Badge
