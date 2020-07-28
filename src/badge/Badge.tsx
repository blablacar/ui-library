import React from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { StyledBadge } from './Badge.style'

export interface BadgeProps extends A11yProps {
  readonly className?: string
  readonly children: string | JSX.Element | number
}

export const Badge = (props: BadgeProps) => {
  const { className, children } = props
  const a11yAttrs = pickA11yProps<BadgeProps>(props)
  if (isEmpty(children)) {
    return null
  }

  return (
    <StyledBadge className={cc(['kirk-badge', className])} {...a11yAttrs}>
      <span aria-hidden={!!a11yAttrs['aria-label']}>{children}</span>
    </StyledBadge>
  )
}
