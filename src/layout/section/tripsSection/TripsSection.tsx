import React from 'react'
import cc from 'classcat'

import { TripCardProps } from 'tripCard/TripCard'

export interface TripsSectionProps {
  readonly children: React.ReactElement<TripCardProps>[]
  readonly className?: Classcat.Class
  readonly width?: string
}

const TripsSection = ({ children, className = '' }: TripsSectionProps) => (
  <div className={cc(['kirk-tripsSection-wrapper', className])}>
    <ul className={cc(['kirk-tripsSection'])}>{children}</ul>
  </div>
)

export default TripsSection
