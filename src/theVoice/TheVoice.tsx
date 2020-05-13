import React, { ReactNode } from 'react'

import Title from '../title'

export interface TheVoiceProps {
  readonly id?: string
  readonly className?: string
  readonly children: ReactNode
  readonly isInverted?: boolean
}

const TheVoice = ({ id, className, children }: TheVoiceProps) => (
  <Title id={id} className={className} headingLevel="1">
    {children}
  </Title>
)

export default TheVoice
