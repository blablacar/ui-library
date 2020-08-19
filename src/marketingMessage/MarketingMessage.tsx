import React from 'react'
import cc from 'classcat'

export type MarketingMessageProps = Readonly<{
  children: React.ReactNode
  className?: string
}>

export const MarketingMessage = ({ children, className }: MarketingMessageProps) => (
  <div className={cc(className)}>{children}</div>
)
