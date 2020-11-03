import React, { ReactNode } from 'react'
import cc from 'classcat'

import { StyledTheVoice } from './TheVoice.style'

export type TheVoiceProps = Readonly<{
  id?: string
  className?: string
  children: ReactNode
  isInverted?: boolean
}>

export const TheVoice = ({ id, className, children, isInverted }: TheVoiceProps) => (
  <StyledTheVoice
    id={id}
    className={cc([className, { 'kirk-thevoice--inverted': isInverted }])}
    headingLevel="1"
  >
    {children}
  </StyledTheVoice>
)
