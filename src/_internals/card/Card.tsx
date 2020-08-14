import React from 'react'
import cc from 'classcat'

export type CardProps = Readonly<{
  className?: string
  children?: React.ReactNode
}>

export const Card = ({ className, children }: CardProps) => (
  <li className={cc(['kirk-card', className])}>{children}</li>
)
