import React from 'react'
import cc from 'classcat'

import { StyledMarketingMessage } from './MarketingMessage.style'

export type MarketingMessageProps = Readonly<{
  children: React.ReactNode
  className?: string
}>

export const MarketingMessage = ({ children, className }: MarketingMessageProps) => (
  <StyledMarketingMessage className={cc(className)}>{children}</StyledMarketingMessage>
)
