import React from 'react'
import cc from 'classcat'

export interface MarketingMessageProps {
  readonly children: React.ReactNode
  readonly className?: string
}

export const MarketingMessage = ({ children, className }: MarketingMessageProps) => (
  <div className={cc(className)}>{children}</div>
)
