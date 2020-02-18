import React, { ReactNode } from 'react'
import Title from 'title'

export interface TheVoiceProps {
  readonly id?: string
  readonly className?: Classcat.Class
  readonly children: ReactNode
  readonly isInverted?: boolean
}

const TheVoice = ({ id, className, children, isInverted = false }: TheVoiceProps) => {
  const classes = isInverted ? `kirk-title--inverse ${className}` : className
  return (
    <Title id={id} className={classes} headingLevel="1">
      {children}
    </Title>
  )
}

export default TheVoice
