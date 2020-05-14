import React from 'react'
import cc from 'classcat'

import Stars from '../stars'

export interface RatingProps {
  className?: string
  score?: number
  ratings: number
  children: string
}

const Rating = ({
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

export default Rating
