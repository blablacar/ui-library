import React, { ReactNode } from 'react'
import cc from 'classcat'

import { StyledTitle } from './Title.style'

export interface TitleProps {
  readonly id?: string
  readonly className?: string
  readonly children: ReactNode
  readonly headingLevel?: 1 | 2 | 3 | 4 | 5 | 6 | '1' | '2' | '3' | '4' | '5' | '6'
}

const HEADING_LEVEL_MAPPING = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const

export const Title = ({ id, className, children, headingLevel = 1 }: TitleProps) => {
  let headingLevelNumber: number
  if (typeof headingLevel === 'string') {
    headingLevelNumber = parseInt(headingLevel, 10)
  } else {
    headingLevelNumber = headingLevel
  }

  return (
    <StyledTitle
      as={HEADING_LEVEL_MAPPING[headingLevelNumber - 1]}
      id={id}
      className={cc(['kirk-title', className])}
    >
      {children}
    </StyledTitle>
  )
}
