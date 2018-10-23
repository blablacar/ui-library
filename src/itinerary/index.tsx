import React from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import Text, { TextDisplayType, TextTagType } from 'text'
import ChevronIcon from 'icon/chevronIcon'

import style from 'itinerary/style'

interface ItineraryProps {
  readonly places: Place[],
  readonly className?: Classcat.Class,
  readonly fromAddon?: string,
  readonly toAddon?: string,
  readonly small?: boolean,
  readonly headline?: string,
}

const Itinerary = ({
  className, places, fromAddon, toAddon, small = false, headline = null,
}: ItineraryProps) => {

  return (
    <ul className={cc([className, { 'kirk-itinerary--small': small }])}>
      {
        headline && (
          <li className="kirk-itinerary-headline">
            <Text display={TextDisplayType.TITLE}>
              {headline}
            </Text>
          </li>
        )
      }
      {
        fromAddon && (
          <li className="kirk-itinerary-fromAddon">
            <Text display={TextDisplayType.CAPTION}>
              {fromAddon}
            </Text>
          </li>
        )
      }
      {
        places.map((place, index) => {

          let Component: tag
          let chevron = false
          let hrefProps

          const link = place.href
          const isLastPlace = places.length - 1 === index

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
              className={
                cc(['kirk-itinerary-location', {
                  'kirk-itinerary--departure': index === 0,
                  'kirk-itinerary--arrival': isLastPlace,
                  'kirk-itinerary-location--toAddon': isLastPlace && toAddon,
                }])
              }
              key={`${place.mainLabel}-${place.subLabel}-${place.isoDate}`}
            >
              <Component {...hrefProps}>
                {
                  !small && (
                    <time dateTime={place.isoDate}>
                      <Text display={TextDisplayType.TITLESTRONG}>
                        {place.time}
                      </Text>
                    </time>
                  )
                }
                <div className="kirk-itinerary-location-city">
                  <Text display={TextDisplayType.TITLESTRONG}>
                    {place.mainLabel}
                  </Text>
                  {
                    (!small && place.subLabel) && (
                      typeof place.subLabel === 'string' ? (
                        <Text
                          tag={TextTagType.PARAGRAPH}
                          display={TextDisplayType.CAPTION}
                        >
                          {place.subLabel}
                        </Text>
                      ) : (
                        <div>
                          {place.subLabel}
                        </div>
                      )
                    )
                  }
                </div>
                {
                  chevron &&
                    <div className="kirk-itinerary-location-chevron">
                      <ChevronIcon />
                    </div>
                }
              </Component>
            </li>
          )
        })
      }
      {
        toAddon && (
          <li className="kirk-itinerary-toAddon">
            <Text display={TextDisplayType.CAPTION}>
              {toAddon}
            </Text>
          </li>
        )
      }
      <style jsx>{style}</style>
    </ul>
  )
}

export default Itinerary
