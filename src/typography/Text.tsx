import React, { ReactNode } from 'react'

import { replaceNewLineWithBR } from '_utils'

export interface TextProps {
  readonly className?: string
  readonly children: string | ReactNode
  readonly isInverted?: boolean // Switch colors based on backgournd
  readonly itemProp?: string // Allows microdata annotation on Text
}

const Text = ({ children, className, isInverted, ...props }: TextProps) => {
  const content = typeof children === 'string' ? replaceNewLineWithBR(children) : children

  return (
    <span className={className} {...props}>
      {content}
    </span>
  )
}

export default Text
