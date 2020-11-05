import React, { Fragment } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'
import isString from 'lodash.isstring'

import { ItineraryCollapsible } from '../_internals/itineraryCollapsible'
import { computeKeyFromPlace, ItineraryLocation } from '../_internals/itineraryLocation'
import { color } from '../_utils/branding'
import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { Place } from '../_utils/place'
import { Bullet, BulletTypes } from '../bullet'
import { SpacingDivider } from '../divider/spacingDivider'
import { SubHeader } from '../subHeader'
import { Text, TextDisplayType, TextTagType } from '../text'
import { StyledItinerary } from './Itinerary.style'

export type ItineraryProps = A11yProps &
  Readonly<{
    places?: Place[]
    className?: string
    fromAddon?: string
    toAddon?: string
    fromAddonAriaLabel?: string
    toAddonAriaLabel?: string
    small?: boolean
    headline?: string
    highlightRoad?: boolean
    isCollapsible?: boolean
    collapsedLabel?: string
    segmentCollapsedLabels?: Array<string>
    collapsedAriaProps?: A11yProps
    segments?: Array<Array<Place>>
  }>

type StopoverProps = Readonly<{
  isCollapsible?: boolean
  intermediatePlaces: Array<Place>
  collapsedLabel: string
  collapsedAriaProps?: A11yProps
  small: boolean
  withTime: boolean
}>

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

const STOPOVER_COUNT_TO_COLLAPSE_FROM = 1

const renderLocation = (
  places: Place[],
  isArrival: boolean,
  small: boolean,
  withTime: boolean,
  hasBottomAddon: boolean,
  displayConnection?: boolean,
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
      displayConnection={displayConnection}
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
        <Text tag={TextTagType.PARAGRAPH} display={TextDisplayType.CAPTION} textColor={color.gray}>
          {addon}
        </Text>
      </div>
    </li>
  )
}

const renderStopover = ({
  isCollapsible,
  intermediatePlaces,
  collapsedLabel,
  collapsedAriaProps,
  small,
  withTime,
}: StopoverProps) => {
  if (isCollapsible) {
    if (intermediatePlaces.length > STOPOVER_COUNT_TO_COLLAPSE_FROM) {
      return (
        <ItineraryCollapsible
          places={intermediatePlaces}
          label={collapsedLabel}
          {...collapsedAriaProps}
        />
      )
    }
    return intermediatePlaces.map(place => (
      <ItineraryLocation
        place={place}
        displaySubLabelOnly
        isSmall
        className="kirk-itineraryLocation-smallLabel"
        key={`${computeKeyFromPlace(place)}`}
      />
    ))
  }
  return intermediatePlaces.map(place => (
    <ItineraryLocation
      place={place}
      hasTime={!small && withTime}
      hasSubLabel={!small && Boolean(place.subLabel)}
      key={computeKeyFromPlace(place)}
    />
  ))
}

export const Itinerary = (props: ItineraryProps) => {
  const {
    className,
    places = [],
    fromAddon,
    toAddon,
    fromAddonAriaLabel,
    toAddonAriaLabel,
    small = false,
    headline = null,
    highlightRoad = true,
    isCollapsible = false,
    collapsedLabel,
    collapsedAriaProps,
    segments,
    segmentCollapsedLabels,
  } = props
  const a11yAttrs = pickA11yProps<ItineraryProps>(props)

  let withTime = true
  // Add the small class if we don't have "time" to prevent empty content
  // This is a quick fix and only applies for places prop not for segments.
  if (!isEmpty(places)) {
    withTime = places.filter(p => !isEmpty(p.time)).length > 0
  }

  // Remove aria-labelledby attribute if aria-label already used
  const rootA11yProps = computeRootA11yProps(a11yAttrs['aria-label'], a11yAttrs['aria-labelledby'])

  const intermediatePlaces = getIntermediatePlaces(places)

  return (
    <StyledItinerary className={cc(['kirk-itinerary-root', className])} {...rootA11yProps}>
      {isNonEmptyString(headline) && (
        <Fragment>
          <SubHeader>{headline}</SubHeader>
          <SpacingDivider />
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
        {isEmpty(segments) ? (
          <Fragment>
            {renderLocation(places, false, small, withTime, false)}
            {renderStopover({
              isCollapsible,
              intermediatePlaces,
              collapsedLabel,
              collapsedAriaProps,
              small,
              withTime,
            })}
            {renderLocation(places, true, small, withTime, isNonEmptyString(toAddon))}
          </Fragment>
        ) : (
          segments.map((segmentPlaces, index) => {
            const segmentIntermediatePlaces = getIntermediatePlaces(segmentPlaces)
            const displayConnection = segments.length !== index + 1
            return (
              <Fragment>
                {renderLocation(segmentPlaces, false, small, withTime, false)}
                {renderStopover({
                  isCollapsible,
                  intermediatePlaces: segmentIntermediatePlaces,
                  collapsedLabel: segmentCollapsedLabels[index],
                  collapsedAriaProps,
                  small,
                  withTime,
                })}
                {renderLocation(
                  segmentPlaces,
                  true,
                  small,
                  withTime,
                  isNonEmptyString(toAddon),
                  displayConnection,
                )}
              </Fragment>
            )
          })
        )}

        {renderAddon('to', toAddon, toAddonAriaLabel)}
      </ul>
    </StyledItinerary>
  )
}
