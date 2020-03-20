import React from 'react'
import cc from 'classcat'

export interface CardProps {
  readonly className?: Classcat.Class
  readonly children?: React.ReactNode
}

const Card = ({ className, children }: CardProps) => (
  <li className={cc(['kirk-card', className])}>{children}</li>
)

export default Card
