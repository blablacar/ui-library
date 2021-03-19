import React from 'react'

import { QrCardProps } from '../../../qrCard'
import { TripCardProps } from '../../../tripCard'
import { StyledCardsStackSection } from './CardsStackSection.style'

type CardsProps = TripCardProps | QrCardProps
type ChildrenProps = React.ReactElement<CardsProps>[] | React.ReactElement<CardsProps>

export type CardsStackSectionProps = Readonly<{
  children: ChildrenProps
}>

export const CardsStackSection = ({ children }: CardsStackSectionProps): JSX.Element => (
  <StyledCardsStackSection>{children}</StyledCardsStackSection>
)
