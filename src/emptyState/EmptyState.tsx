import React from 'react'
import cc from 'classcat'

import Title from '../title'

export interface EmptyStateProps {
  readonly className?: string
  readonly image: string
  readonly text: string
  readonly button?: JSX.Element
}

const EmptyState = ({ className, image, text, button }: EmptyStateProps) => (
  <div className={cc(['kirk-empty-state', className])}>
    <img src={image} alt="" />
    <Title>{text}</Title>
    {button}
  </div>
)

export default EmptyState
