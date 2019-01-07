import React from 'react'
import cc from 'classcat'
import Star from 'icon/starIcon'

import style from 'stars/style'

interface Stars {
  readonly className?: Classcat.Class
  readonly stars: number
}

const ValidateStars = (star: number) => !(star < 0 || star > 5)

const StarIcon = ({ offset }: { offset: number }) => (
  <div className="star">
    <Star fill={offset} size="14" />
    <style>{style}</style>
  </div>
)

const Stars = ({ stars, className = '' }: Stars) => (
  <div className={cc(className)}>
    {ValidateStars(stars) &&
      Array.from({ length: 5 }, (v, index) => {
        const filled = stars - index
        const result = filled > 0 ? Math.min(1, filled) : 0
        return <StarIcon key={index} offset={result} />
      })}
  </div>
)

export default Stars
