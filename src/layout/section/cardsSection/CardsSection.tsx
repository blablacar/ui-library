import React from 'react'
import cc from 'classcat'

import { QrCardProps } from 'qrCard'
import { TripCardProps } from 'tripCard'

type CardsProps = TripCardProps | QrCardProps

export interface CardsSectionProps {
  readonly children: React.ReactElement<CardsProps>[] | React.ReactElement<CardsProps>
  readonly className?: string
  readonly width?: string
}

const CardsSection = ({ children, className = '' }: CardsSectionProps) => (
  <div className={cc(['kirk-cardsSection-wrapper', className])}>
    <ul className={cc(['kirk-cardsSection'])}>{children}</ul>
  </div>
)

export default CardsSection
