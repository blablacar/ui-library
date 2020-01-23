import React, { Fragment } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'
import isString from 'lodash.isstring'

import { color } from '_utils/branding'
import Text, { TextDisplayType, TextTagType } from 'text'
import SubHeader from 'subHeader'
import BlankSeparator from 'blankSeparator'
import Bullet, { BulletTypes } from 'bullet'
import ItineraryCollapsible from '_utils/itineraryCollapsible'
import ItineraryLocation, { computeKeyFromPlace } from '_utils/itineraryLocation'

export interface ItineraryProps {
  readonly ariaLabelledBy?: string
  readonly ariaLabel?: string
  readonly places: Place[]
  readonly className?: Classcat.Class
  readonly fromAddon?: string
  readonly toAddon?: string
  readonly fromAddonAriaLabel?: string
  readonly toAddonAriaLabel?: string
  readonly small?: boolean
  readonly headline?: string
  readonly highlightRoad?: boolean
  readonly isCollapsible?: boolean
  readonly collapsedLabel?: string
  readonly collapsedAriaLabel?: string
}

interface RootA11yProps {
  'aria-label'?: string
  'aria-labelledby'?: string
}

const isNonEmptyString = (str: string) => isString(str) && str.trim().length > 0

const computeRootA11yProps = (ariaLabel?: string, ariaLabelledBy?: string): RootA11yProps => {
  const rootA11yProps: RootA11yProps = {}
  if (ariaLabel) {
    rootA11yProps['aria-label'] = ariaLabel
  }
  const ariaLabelledByValue = isNonEmptyString(ariaLabel) ? null : ariaLabelledBy
  if (ariaLabelledByValue) {
    rootA11yProps['aria-labelledby'] = ariaLabelledByValue
  }
  return rootA11yProps
}

// Get places between departure and arrival
const getIntermediatePlaces = (places: Place[]) => places.slice(1, -1)

const renderLocation = (
  places: Place[],
  isArrival: boolean,
  small: boolean,
  withTime: boolean,
  hasBottomAddon: boolean,
) => {
  // if there's only one place, we display it as Arrival, not Departure
  if (places.length === 1 && !isArrival) {
    return null
  }

  const place = isArrival ? places[places.length - 1] : places[0]

  return (
    <ItineraryLocation
      place={place}
      isArrival={isArrival}
      hasTime={!small && withTime}
      hasSubLabel={!small && !isEmpty(place.subLabel)}
      hasBottomAddon={isArrival ? hasBottomAddon : false}
    />
  )
}

const renderAddon = (type: string, addon: string, ariaLabel: string) => {
  if (!isNonEmptyString(addon) || (type !== 'from' && type !== 'to')) {
    return null
  }

  return (
    <li
      className={`kirk-itineraryLocation kirk-itinerary-addon kirk-itinerary-addon--${type}`}
      aria-label={ariaLabel}
    >
      <div className="kirk-itineraryLocation-roadContainer" aria-hidden="true">
        <Bullet className="kirk-itineraryLocation-bullet" type={BulletTypes.ADDON} />
        {type === 'from' && <div className="kirk-itineraryLocation-road" aria-hidden="true" />}
      </div>
      <div className="kirk-itineraryLocation-label">
        <Text
          tag={TextTagType.PARAGRAPH}
          display={TextDisplayType.CAPTION}
          textColor={color.fadedText}
        >
          {addon}
        </Text>
      </div>
    </li>
  )
}

const Itinerary = ({
  ariaLabelledBy,
  ariaLabel,
  className,
  places,
  fromAddon,
  toAddon,
  fromAddonAriaLabel,
  toAddonAriaLabel,
  small = false,
  headline = null,
  highlightRoad = true,
  isCollapsible = false,
  collapsedLabel,
  collapsedAriaLabel,
}: ItineraryProps) => {
  // Add the small class if we don't have "time" to prevent empty content
  const withTime = places.filter(p => !isEmpty(p.time)).length > 0

  // Remove aria-labelledby attribute if aria-label already used
  const rootA11yProps = computeRootA11yProps(ariaLabel, ariaLabelledBy)

  const intermediatePlaces = getIntermediatePlaces(places)

  return (
    <div className={cc(['kirk-itinerary-root', className])} {...rootA11yProps}>
      {isNonEmptyString(headline) && (
        <Fragment>
          <SubHeader>{headline}</SubHeader>
          <BlankSeparator />
        </Fragment>
      )}
      <ul
        className={cc([
          {
            'kirk-itinerary--noTime': small || !withTime,
            'kirk-itinerary--highlightRoad': highlightRoad,
          },
        ])}
      >
        {renderAddon('from', fromAddon, fromAddonAriaLabel)}
        {renderLocation(places, false, small, withTime, false)}
        {isCollapsible && intermediatePlaces.length > 0 && (
          <ItineraryCollapsible
            places={intermediatePlaces}
            label={collapsedLabel}
            ariaLabel={collapsedAriaLabel}
          />
        )}
        {!isCollapsible &&
          intermediatePlaces.length > 0 &&
          intermediatePlaces.map(place => (
            <ItineraryLocation
              place={place}
              hasTime={!small && withTime}
              hasSubLabel={!small && Boolean(place.subLabel)}
              key={computeKeyFromPlace(place)}
            />
          ))}
        {renderLocation(places, true, small, withTime, isNonEmptyString(toAddon))}
        {renderAddon('to', toAddon, toAddonAriaLabel)}
      </ul>
    </div>
  )
}

export default Itinerary
