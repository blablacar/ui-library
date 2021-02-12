import React, { ReactNode } from 'react'

import { replaceNewLineWithBR } from '../_utils'

export type TextProps = Readonly<{
  className?: string
  children: string | ReactNode
  /**
   * Switch colors based on backgournd
   */
  isInverted?: boolean
  /**
   * Ligthen the text color to emphasis on disabled state
   * */
  isDisabled?: boolean
  /**
   * Allows microdata annotation on Text
   */
  itemProp?: string
}>

export const Text = ({ children, className, isInverted, isDisabled, ...props }: TextProps) => {
  const content = typeof children === 'string' ? replaceNewLineWithBR(children) : children

  return (
    <span className={className} {...props}>
      {content}
    </span>
  )
}
