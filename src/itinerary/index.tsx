import React from 'react'
import cc from 'classcat'

import Text, { TextDisplayType, TextTagType } from 'text'

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
}: ItineraryProps) => (
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
      places.map((place, index) => (
        <li
          className={
            cc(['kirk-itinerary-location', {
              'kirk-itinerary--departure': index === 0,
              'kirk-itinerary--arrival': index === places.length - 1,
              'kirk-itinerary-location--toAddon': index === places.length - 1 && toAddon,
            }])
          }
          key={`${place.mainLabel}-${place.subLabel}-${place.isoDate}`}
        >
          {
            !small && (
              <time dateTime={place.isoDate}>{place.time}</time>
            )
          }
          <div>
            <Text display={TextDisplayType.TITLESTRONG}>
              {place.mainLabel}
            </Text>
            {
              (!small && place.subLabel) && (
                <Text
                  tag={TextTagType.PARAGRAPH}
                  display={TextDisplayType.CAPTION}
                >
                  {place.subLabel}
                </Text>
              )
            }
          </div>
        </li>
      ))
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

export default Itinerary
