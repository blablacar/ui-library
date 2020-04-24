import React from 'react'
import cc from 'classcat'

export interface CardProps {
  readonly className?: string
  readonly children?: React.ReactNode
}

const Card = ({ className, children }: CardProps) => (
  <li className={cc(['kirk-card', className])}>{children}</li>
)

export default Card
