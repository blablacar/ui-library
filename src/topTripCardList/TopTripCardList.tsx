import React from 'react'
import cc from 'classcat'

import { TripCardProps } from 'tripCard/TripCard'

export interface TopTripCardListProps {
  readonly children: React.ReactElement<TripCardProps>[]
  readonly className?: Classcat.Class
  readonly width?: string
  readonly isWrapped?: boolean
}

const TopTripCardList = ({ children, className = '', isWrapped = false }: TopTripCardListProps) => (
  <div className={cc(['kirk-topTripCardList-wrapper', className])}>
    <ul className={cc(['kirk-topTripCardList', { 'kirk-topTripCardList-wrapped': isWrapped }])}>
      {children}
    </ul>
  </div>
)

export default TopTripCardList
