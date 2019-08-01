import React from 'react'
import cc from 'classcat'
import Star from 'icon/starIcon'

interface Stars {
  readonly className?: Classcat.Class
  readonly stars: number
}

const MIN_STARS = 0
const MAX_STARS = 5

const ValidateStars = (star: number) => !(star < MIN_STARS || star > MAX_STARS)

const StarIcon = ({ offset }: { offset: number }) => (
  <div className="star">
    <Star fill={offset} size="14" />
  </div>
)

const Stars = ({ stars, className }: Stars) => (
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
