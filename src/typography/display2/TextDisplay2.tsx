import React, { ReactNode } from 'react'

import Text, { TextDisplayType, TextTagType } from 'text'

export interface TextBodyProps {
  readonly className?: Classcat.Class
  readonly children: string | ReactNode
  readonly isInverted?: boolean
  readonly role?: string
  readonly ariaLabel?: string
}

const TextDiplay2 = ({ children, className, isInverted = false, ...props }: TextBodyProps) => {
  const classes = isInverted ? `kirk-text--inverse ${className}` : className
  return (
    <Text display={TextDisplayType.DISPLAY2} tag={TextTagType.SPAN} className={classes} {...props}>
      {children}
    </Text>
  )
}

export default TextDiplay2
