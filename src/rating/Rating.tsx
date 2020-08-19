import React from 'react'
import cc from 'classcat'

import { Stars } from '../stars'

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
  <div className={cc(['kirk-rating', className])}>
    <Stars stars={score} />
    <span>
      {ratings} {children}
    </span>
  </div>
)
