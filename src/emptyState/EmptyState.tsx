import React from 'react'
import cc from 'classcat'

import { Title } from '../title'
import { StyledEmptyState } from './EmptyState.style'

export type EmptyStateProps = Readonly<{
  className?: string
  image: string
  text: string
  button?: JSX.Element
}>

export const EmptyState = ({ className, image, text, button }: EmptyStateProps) => (
  <StyledEmptyState className={cc(['kirk-empty-state', className])}>
    <img src={image} alt="" />
    <Title>{text}</Title>
    {button}
  </StyledEmptyState>
)
