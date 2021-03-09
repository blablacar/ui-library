import React, { Fragment } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { Item } from '../_internals/item'
import { color } from '../_utils/branding'
import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { Avatar } from '../avatar'
import { AloneInTheBackIcon } from '../icon/aloneInTheBackIcon'
import { ComfortIcon } from '../icon/comfortIcon'
import { LadyIcon } from '../icon/ladyIcon'
import { LightningIcon } from '../icon/lightningIcon'
import { StarIcon as Star } from '../icon/starIcon'
import { Text, TextDisplayType, TextTagType } from '../text'
import { TextBody } from '../typography/body'
import { StyledTripCard } from './TripCard.style'

/**
 * Display 5 passengers max.
 * When having more than this number, the last displayed one is replaced by a more counter.
 *
 * Exemples:
 * - 5 passengers or less: we display all of them
 * - 6 passengers: we display 4 passengers and a '+2' bubble
 */
const PASSENGERS_TO_DISPLAY = 5

export type User = {
  avatarUrl: string
  firstName: string
  rating?: string
}

export type Driver = User & {
  subText?: string
}

export type TripCardProps = A11yProps &
  Readonly<{
    href: string | JSX.Element
    itinerary: JSX.Element
    driver?: Driver
    passengers?: User[]
    price?: string
    flags?: {
      ladiesOnly?: boolean
      aloneInTheBack?: boolean
      maxTwo?: boolean
      autoApproval?: boolean
    }
    titles?: {
      ladiesOnly?: string
      aloneInTheBack?: string
      maxTwo?: string
      autoApproval?: string
    }
    className?: string
    statusInformation?: {
      icon: JSX.Element
      text: string
      highlighted?: boolean
    }
    badge?: string
    mainTitle?: string
  }>

const renderPassenger = (passenger: User) => (
  <li className="kirk-tripCard-avatar" key={`${passenger.firstName}-${passenger.avatarUrl}`}>
    <Avatar image={passenger.avatarUrl} alt={passenger.firstName} isSmall />
  </li>
)

const renderMorePassengers = (count: number) => (
  <li className="kirk-tripCard-avatar kirk-tripCard-passengers-more">
    <Text display={TextDisplayType.BODY} textColor={color.white}>
      +{count}
    </Text>
  </li>
)

export const TripCard = (props: TripCardProps) => {
  const {
    className,
    href,
    itinerary,
    driver,
    passengers = [],
    price,
    flags = {},
    titles = {},
    statusInformation = null,
    badge = null,
    mainTitle = null,
  } = props
  const a11yAttrs = pickA11yProps<TripCardProps>(props)
  const shouldDisplayBottomLeft = driver || !isEmpty(passengers)
  const shouldDisplayBottomRight = !isEmpty(flags)
  const shouldDisplayBottom = shouldDisplayBottomLeft || shouldDisplayBottomRight

  let componentTag
  let componentProps = {}

  // If we pass a component to href, we get component type and we merge props
  if (typeof href !== 'string') {
    componentTag = href.type
    componentProps = {
      ...href.props,
      rel: 'nofollow',
      ...a11yAttrs,
    }
  } else {
    componentTag = 'a'
    componentProps = {
      href,
      rel: 'nofollow',
      ...a11yAttrs,
    }
  }

  let driverSubText: React.ReactElement | null = null

  if (shouldDisplayBottom && driver != null) {
    if (driver.subText != null) {
      driverSubText = (
        <TextBody className="kirk-tripCard-ratingContainer">{driver.subText}</TextBody>
      )
    } else if (driver.rating != null) {
      driverSubText = (
        <TextBody className="kirk-tripCard-ratingContainer">
          <Star fill={1} size={16} />
          <span className="kirk-tripCard-rating">{driver.rating}</span>
        </TextBody>
      )
    }
  }

  return (
    <StyledTripCard
      className={cc([
        'kirk-tripCard',
        {
          'kirk-tripCard--with-badge': badge && badge.length,
          'kirk-tripCard--with-price': price && price.length,
        },
        className,
      ])}
    >
      {React.createElement(
        componentTag,
        componentProps,
        <Fragment>
          {badge && (
            <Text className="kirk-tripCard-badge" textColor={color.white}>
              {badge}
            </Text>
          )}

          {statusInformation && (
            <Item
              className="kirk-tripCard-top-item"
              leftAddon={React.cloneElement(statusInformation.icon, {
                iconColor: statusInformation.highlighted ? color.blue : color.lightMidnightGreen,
              })}
              leftTitle={statusInformation.text}
              leftTitleDisplay={TextDisplayType.BODY}
              highlighted={statusInformation.highlighted}
            />
          )}

          {mainTitle && (
            <Text display={TextDisplayType.SUBHEADERSTRONG} className="kirk-tripCard-title">
              {mainTitle}
            </Text>
          )}
          <div className="kirk-tripCard-mainContainer">
            <div className="kirk-tripCard-main">
              <div className="kirk-tripCard-itinerary">{itinerary}</div>
              <Text className="kirk-tripCard-price" display={TextDisplayType.TITLESTRONG}>
                {price}
              </Text>
            </div>

            {shouldDisplayBottom && (
              <div
                className={cc([
                  'kirk-tripCard-bottom',
                  { 'kirk-tripCard-bottom--only-right': !shouldDisplayBottomLeft },
                ])}
              >
                {shouldDisplayBottomLeft && (
                  <div className="kirk-tripCard-bottom-left">
                    {driver && (
                      <div className="kirk-tripCard-driver">
                        <Avatar className="kirk-tripCard-avatar" image={driver.avatarUrl} />
                        <div className="kirk-tripCard-driver-info">
                          <Text
                            className="kirk-tripCard-driver-name"
                            tag={TextTagType.PARAGRAPH}
                            display={TextDisplayType.TITLE}
                          >
                            {driver.firstName}
                          </Text>
                          {driverSubText}
                        </div>
                      </div>
                    )}
                    {!isEmpty(passengers) && (
                      <ul className="kirk-tripCard-passengers">
                        {passengers.length > PASSENGERS_TO_DISPLAY &&
                          renderMorePassengers(passengers.length - PASSENGERS_TO_DISPLAY + 1)}
                        {passengers.length === PASSENGERS_TO_DISPLAY &&
                          renderPassenger(passengers[PASSENGERS_TO_DISPLAY - 1])}
                        {passengers
                          .slice(0, PASSENGERS_TO_DISPLAY - 1)
                          .reverse()
                          .map(renderPassenger)}
                      </ul>
                    )}
                  </div>
                )}

                {shouldDisplayBottomRight && (
                  <div className="kirk-tripCard-bottom-right">
                    <div className="kirk-tripCard-flags">
                      {flags.ladiesOnly && <LadyIcon title={titles.ladiesOnly || ''} />}
                      {flags.aloneInTheBack && (
                        <AloneInTheBackIcon title={titles.aloneInTheBack || ''} />
                      )}
                      {flags.maxTwo && <ComfortIcon title={titles.maxTwo || ''} />}
                      {flags.autoApproval && <LightningIcon title={titles.autoApproval || ''} />}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </Fragment>,
      )}
    </StyledTripCard>
  )
}
