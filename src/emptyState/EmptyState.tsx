import React from 'react'
import cc from 'classcat'

import { Title } from '../title'
import { StyledEmptyState } from './EmptyState.style'

export interface EmptyStateProps {
  readonly className?: string
  readonly image: string
  readonly text: string
  readonly button?: JSX.Element
}

export const EmptyState = ({ className, image, text, button }: EmptyStateProps) => (
  <StyledEmptyState className={cc(['kirk-empty-state', className])}>
    <img src={image} alt="" />
    <Title>{text}</Title>
    {button}
  </StyledEmptyState>
)
