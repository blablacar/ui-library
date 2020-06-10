import React from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'
import styled from 'styled-components'

import { color } from '../_utils/branding'

export interface BadgeProps {
  readonly className?: string
  readonly children: string | JSX.Element | number
  readonly ariaLabel?: string
}

const StyledBadge = styled.span`
  box-sizing: border-box;
  display: inline-block;
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  text-align: center;
  border-radius: 18px;
  border: 1px solid ${color.white};
  background-color: ${color.red};
  color: ${color.white};
`

export const Badge = ({ className, children, ariaLabel }: BadgeProps) => {
  if (isEmpty(children)) {
    return null
  }

  return (
    <StyledBadge className={cc(['kirk-badge', className])} aria-label={ariaLabel}>
      <span aria-hidden={!!ariaLabel}>{children}</span>
    </StyledBadge>
  )
}
