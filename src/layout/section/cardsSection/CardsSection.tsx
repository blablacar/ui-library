import React from 'react'
import cc from 'classcat'

import { QrCardProps } from '../../../qrCard'
import { TripCardProps } from '../../../tripCard'

type CardsProps = TripCardProps | QrCardProps

export type CardsSectionProps = Readonly<{
  children: React.ReactElement<CardsProps>[] | React.ReactElement<CardsProps>
  className?: string
  width?: string
}>

export const CardsSection = ({ children, className = '' }: CardsSectionProps) => (
  <div className={cc(['kirk-cardsSection-wrapper', className])}>
    <ul className={cc(['kirk-cardsSection'])}>{children}</ul>
  </div>
)
