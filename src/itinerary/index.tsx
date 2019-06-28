import React from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'
import isString from 'lodash.isstring'

import { color } from '_utils/branding'
import Text, { TextDisplayType, TextTagType } from 'text'
import ChevronIcon from 'icon/chevronIcon'

import style from 'itinerary/style'

interface ItineraryProps {
  readonly places: Place[]
  readonly className?: Classcat.Class
  readonly fromAddon?: string
  readonly toAddon?: string
  readonly small?: boolean
  readonly headline?: string
}

const isNonEmptyString = (str: string) => isString(str) && str.trim().length > 0

const Itinerary = ({
  className,
  places,
  fromAddon,
  toAddon,
  small = false,
  headline = null,
}: ItineraryProps) => {

  // Dislay itinerary as small if required or if we don't have time or subLabel for provided places
  const isSmall = small || places.filter(p => !isEmpty(p.time) || !isEmpty(p.subLabel)).length === 0

  return (
    <ul className={cc([className, { 'kirk-itinerary--small': isSmall }])}>
      {isNonEmptyString(headline) && (
        <li className="kirk-itinerary-headline">
          <Text display={TextDisplayType.TITLE}>{headline}</Text>
        </li>
      )}
      {isNonEmptyString(fromAddon) && (
        <li className="kirk-itinerary-fromAddon">
          <Text display={TextDisplayType.CAPTION}>{fromAddon}</Text>
        </li>
      )}
      {places.map((place, index) => {
        let Component
        let chevron = false
        let hrefProps
        let key

        const link = place.href
        const isLastPlace = places.length - 1 === index

        if (place.key && typeof place.key === 'string') {
          key = place.key
        } else if (typeof place.subLabel === 'string') {
          key = `${place.mainLabel}-${place.subLabel}-${place.isoDate}`
        } else {
          key = `${place.mainLabel}-${place.isoDate}`
        }

        if (!isEmpty(link) && typeof link !== 'string') {
          Component = link.type
          chevron = true
          hrefProps = {
            ...link.props,
            className: cc(['kirk-itinerary-location-wrapper', link.props.className]),
          }
        } else if (typeof link === 'string') {
          Component = 'a'
          chevron = true
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
                'kirk-itinerary--departure': index === 0,
                'kirk-itinerary--arrival': isLastPlace,
                'kirk-itinerary-location--toAddon': isLastPlace && isNonEmptyString(toAddon),
              },
            ])}
            key={key}
            itemProp="location"
            itemScope
            itemType="http://schema.org/Place"
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
            <Component {...hrefProps}>
              {!isSmall && (
                <time dateTime={place.isoDate}>
                  <Text display={TextDisplayType.TITLESTRONG}>{place.time}</Text>
                </time>
              )}
              <div className="kirk-itinerary-location-city">
                <Text display={TextDisplayType.TITLESTRONG}>{place.mainLabel}</Text>
                {!isSmall &&
                  place.subLabel &&
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
              {chevron && (
                <div className="kirk-itinerary-location-chevron">
                  <ChevronIcon />
                </div>
              )}
            </Component>
          </li>
        )
      })}
      {isNonEmptyString(toAddon) && (
        <li className="kirk-itinerary-toAddon">
          <Text display={TextDisplayType.CAPTION}>{toAddon}</Text>
        </li>
      )}
      <style jsx>{style}</style>
    </ul>
  )
}

export default Itinerary
