import React from 'react'
import cc from 'classcat'

import style from 'rating/style'
import Stars from 'stars'

interface Rating {
  className?: Classcat.Class,
  score: number,
  ratings: number,
  children: string,
}

const Rating = ({ className = '', score = 0, ratings = 0, children = '' }: Rating): JSX.Element => (
  <div className={cc(['kirk-rating', className])}>
    <Stars stars={score} />
    <span>{ratings} {children}</span>
    <style>{style}</style>
  </div>
)

export default Rating
