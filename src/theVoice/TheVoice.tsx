import React, { ReactNode } from 'react'

import { StyledTheVoice } from './TheVoice.style'

export type TheVoiceProps = Readonly<{
  children: ReactNode
  id?: string
  className?: string
  isInverted?: boolean
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any> // from styled-components types
}>

export const TheVoice = ({ id, className, children, isInverted, as = 'h1' }: TheVoiceProps) => (
  <StyledTheVoice id={id} as={as} className={className} isInverted={isInverted}>
    {children}
  </StyledTheVoice>
)
