import React, { ElementType, ReactNode } from 'react'

import { StyledTitle } from './Title.style'

export interface TitleProps {
  readonly id?: string
  readonly className?: string
  readonly children: ReactNode
  readonly headingLevel?: number | string
}

export const isHeadingAvailable = (level: number) => level >= 1 && level <= 6

export const Title = ({ id, className, children, headingLevel = 1 }: TitleProps) => {
  if (!isHeadingAvailable(Number(headingLevel))) {
    return null
  }

  return (
    <StyledTitle as={`h${headingLevel}` as ElementType<any>} id={id} className={className}>
      {children}
    </StyledTitle>
  )
}
