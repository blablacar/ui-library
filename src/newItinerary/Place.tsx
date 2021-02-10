import React, { Fragment } from 'react'

import { Bullet, BulletTypes } from '../bullet'
import { TextTitleStrong } from '../typography/titleStrong'
import { StyledLabel, StyledSubLabel, StyledChevronIcon } from './Place.style'
import { ItineraryItem, ItineraryItemProps } from './internals/ItineraryItem'

export type PlaceProps = Omit<ItineraryItemProps, 'children'> & Readonly<{
  label: string
  subLabel: string
  href?: JSX.Element
}>

export const Place = ({ line, label, subLabel, time, bullet = <Bullet type={BulletTypes.DEFAULT}/>, href }: PlaceProps) => {
  return (
    <ItineraryItem line={line} time={time} bullet={bullet}>
      <StyledLabel>
        <TextTitleStrong>{label}</TextTitleStrong>
        {subLabel && (
          <Fragment>
            <br />
            <StyledSubLabel>{subLabel}</StyledSubLabel>
          </Fragment>
        )}

        {href && <StyledChevronIcon/>}
      </StyledLabel>
    </ItineraryItem>
  )
}
