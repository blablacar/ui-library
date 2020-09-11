import React from 'react'
import cc from 'classcat'

import { Stars } from '../stars'
import { StyledRating } from './Rating.style'

export type RatingProps = Readonly<{
  className?: string
  score?: number
  ratings: number
  children: string
}>

export const Rating = ({
  className = '',
  score = 0,
  ratings = 0,
  children = '',
}: RatingProps): JSX.Element => (
  <StyledRating className={cc(['kirk-rating', className])}>
    <Stars stars={score} />
    <span>
      {ratings} {children}
    </span>
  </StyledRating>
)
