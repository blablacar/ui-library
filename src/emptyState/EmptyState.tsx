import React from 'react'
import cc from 'classcat'

import { Title } from '../title'
import { StyledEmptyState } from './EmptyState.style'

export type EmptyStateProps = Readonly<{
  className?: string
  illustration: JSX.Element
  text: string | JSX.Element
  button?: JSX.Element
}>

export const EmptyState = ({ className, illustration, text, button }: EmptyStateProps) => {
  let title
  if (typeof text === 'string') {
    title = <Title>{text}</Title>
  } else {
    title = text
  }

  return (
    <StyledEmptyState className={cc(['kirk-empty-state', className])}>
      {illustration}
      {title}
      {button}
    </StyledEmptyState>
  )
}
