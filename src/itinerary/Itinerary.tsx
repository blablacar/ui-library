import React, { Fragment } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'
import isString from 'lodash.isstring'

import { color } from '_utils/branding'
import Text, { TextDisplayType, TextTagType } from 'text'
import ChevronIcon from 'icon/chevronIcon'
import SubHeader from 'subHeader'
import BlankSeparator from 'blankSeparator'
import Bullet, { BulletTypes } from 'bullet'

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
}

interface RootA11yProps {
  'aria-label'?: string
  'aria-labelledby'?: string
}

const isNonEmptyString = (str: string) => isString(str) && str.trim().length > 0

const computeKeyFromPlace = (place: Place) => {
  if (place.key && typeof place.key === 'string') {
    return place.key
  }
  if (typeof place.subLabel === 'string') {
    return `${place.mainLabel}-${place.subLabel}-${place.isoDate}`
  }
  return `${place.mainLabel}-${place.isoDate}`
}

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
}: ItineraryProps) => {
  // Add the small class if we don't have times to prevent empty content
  const withTime = places.filter(p => !isEmpty(p.time)).length > 0

  // Remove aria-labelledby attribute if aria-label already used
  const rootA11yProps = computeRootA11yProps(ariaLabel, ariaLabelledBy)
  return (
    <div className={cc(['kirk-itinerary-root', className])} {...rootA11yProps}>
      {isNonEmptyString(headline) && (
        <Fragment>
          <SubHeader>{headline}</SubHeader>
          <BlankSeparator />
        </Fragment>
      )}
      <ul className={cc([{ 'kirk-itinerary--noTime': small || !withTime }])}>
        {isNonEmptyString(fromAddon) && (
          <li
            className="kirk-itinerary-location kirk-itinerary-addon kirk-itinerary-addon--from"
            aria-label={fromAddonAriaLabel}
          >
            <div className="kirk-itinerary-road" aria-hidden="true" />
            <Bullet type={BulletTypes.ADDON} />
            <div className="kirk-itinerary-location-city">
              <Text
                tag={TextTagType.PARAGRAPH}
                display={TextDisplayType.CAPTION}
                textColor={color.fadedText}
              >
                {fromAddon}
              </Text>
            </div>
          </li>
        )}
        {places.map((place, index) => {
          let Component
          let hasChevron = false
          let hrefProps

          const link = place.href
          const isLastPlace = places.length - 1 === index
          const hasTime = !small && withTime
          const hasSubLabel = !small && place.subLabel

          if (!isEmpty(link) && typeof link !== 'string') {
            Component = link.type
            hasChevron = true
            hrefProps = {
              ...link.props,
              className: cc(['kirk-itinerary-location-wrapper', link.props.className]),
            }
          } else if (typeof link === 'string') {
            Component = 'a'
            hasChevron = true
            hrefProps = {
              href: place.href,
              className: 'kirk-itinerary-location-wrapper',
            }
          } else {
            Component = 'div'
            hrefProps = {
              className: 'kirk-itinerary-location-wrapper',
            }
          }

          return (
            <li
              className={cc([
                'kirk-itinerary-location',
                {
                  'kirk-itinerary--arrival': isLastPlace,
                  'kirk-itinerary-location--withToAddon': isLastPlace && isNonEmptyString(toAddon),
                },
              ])}
              key={computeKeyFromPlace(place)}
              itemProp="location"
              itemScope
              itemType="http://schema.org/Place"
              aria-label={place.stepAriaLabel}
            >
              <meta itemProp="name" content={place.mainLabel} />
              <meta
                itemProp="address"
                content={
                  place.subLabel && typeof place.subLabel === 'string'
                    ? place.subLabel
                    : place.mainLabel
                }
              />
              <Component {...hrefProps} aria-label={place.actionAriaLabel}>
                {hasTime && (
                  <time dateTime={place.isoDate}>
                    <Text tag={TextTagType.DIV} display={TextDisplayType.TITLESTRONG}>
                      {place.time}
                    </Text>
                  </time>
                )}
                <div className="kirk-itinerary-location-city">
                  <div className="kirk-itinerary-road" aria-hidden="true" />
                  <Bullet />
                  <Text tag={TextTagType.PARAGRAPH} display={TextDisplayType.TITLESTRONG}>
                    {place.mainLabel}
                  </Text>
                  {hasSubLabel &&
                    (typeof place.subLabel === 'string' ? (
                      <Text
                        tag={TextTagType.PARAGRAPH}
                        display={TextDisplayType.CAPTION}
                        textColor={color.primaryText}
                      >
                        {place.subLabel}
                      </Text>
                    ) : (
                      <div>{place.subLabel}</div>
                    ))}
                </div>
                {hasChevron && (
                  <div className="kirk-itinerary-location-chevron">
                    <ChevronIcon />
                  </div>
                )}
              </Component>
            </li>
          )
        })}
        {isNonEmptyString(toAddon) && (
          <li
            className="kirk-itinerary-location kirk-itinerary-addon kirk-itinerary-addon--to"
            aria-label={toAddonAriaLabel}
          >
            <Bullet type={BulletTypes.ADDON} />
            <div className="kirk-itinerary-location-city">
              <Text
                tag={TextTagType.PARAGRAPH}
                display={TextDisplayType.CAPTION}
                textColor={color.fadedText}
              >
                {toAddon}
              </Text>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Itinerary
