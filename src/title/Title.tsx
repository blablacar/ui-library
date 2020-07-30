import React, { ReactNode } from 'react'
import cc from 'classcat'

import { StyledTitle } from './Title.style'

export type TitleProps = Readonly<{
  readonly id?: string
  readonly className?: string
  readonly children: ReactNode
  // headingLevel is defined her both with numbers and strings string for retro-compatibility
  readonly headingLevel?: 1 | 2 | 3 | 4 | 5 | 6 | '1' | '2' | '3' | '4' | '5' | '6'
}>

/**
 * This mapping is needed because `h${headingLevel}` cannot
 * be typed as 'h1' | 'h2' | ... | 'h6',
 * it has to be explicitly 'h1', 'h2', ..., 'h6'
 * when using it with the 'as' polymorphic
 * Error TS2322: Type 'string' is not assignable to type '"symbol"...
 * The expected type comes from property 'as' which is
 * declared here on type 'IntrinsicAttributes &...
 */
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
