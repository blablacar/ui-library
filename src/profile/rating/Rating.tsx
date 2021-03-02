import React from 'react'

import { Stars } from '../stars'
import { StyledRating } from './Rating.style'

export type RatingProps = Readonly<{
  score?: number
  ratings: number
  children: string
}>

export const Rating = ({ score = 0, ratings = 0, children = '' }: RatingProps): JSX.Element => (
  <StyledRating>
    <Stars stars={score} />
    <span>
      {ratings} {children}
    </span>
  </StyledRating>
)
