import React, { ReactNode } from 'react'

import { replaceNewLineWithBR } from '../_utils'

export type TextProps = Readonly<{
  className?: string
  children: string | ReactNode
  isInverted?: boolean // Switch colors based on backgournd
  isDisabled?: boolean // Ligthen the text color to emphasis on disabled state
  itemProp?: string // Allows microdata annotation on Text
}>

export const Text = ({ children, className, isInverted, isDisabled, ...props }: TextProps) => {
  const content = typeof children === 'string' ? replaceNewLineWithBR(children) : children

  return (
    <span className={className} {...props}>
      {content}
    </span>
  )
}
