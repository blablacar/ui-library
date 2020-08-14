import React, { ReactNode } from 'react'

import { Title } from '../title'

export type TheVoiceProps = Readonly<{
  id?: string
  className?: string
  children: ReactNode
  isInverted?: boolean
}>

export const TheVoice = ({ id, className, children }: TheVoiceProps) => (
  <Title id={id} className={className} headingLevel="1">
    {children}
  </Title>
)
