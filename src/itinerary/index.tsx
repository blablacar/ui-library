import React from 'react'
import cc from 'classcat'

import style from 'itinerary/style'

interface ItineraryProps {
  readonly places: Place[],
  readonly className?: Classcat.Class,
  readonly showFromDistance?: boolean,
  readonly showToDistance?: boolean,
  readonly small?: boolean,
  readonly headline?: string,
}

const Itinerary = ({
  className, places, showFromDistance, showToDistance, small = false, headline = null,
}: ItineraryProps) => (
  <ul className={cc([className, { 'kirk-itinerary--small': small }])}>
    {
      headline && (
        <li className="kirk-itinerary-headline">
          <span>{headline}</span>
        </li>
      )
    }
    {
      showFromDistance && (
        <li className="kirk-itinerary-fromDeparture">
          <span>{places[0].distanceFromPoint}</span>
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
              'kirk-itinerary-location--fromArrival': index === places.length - 1 && showToDistance,
            }])
          }
          key={`${place.mainLabel} ${place.subLabel} ${place.isoDate}`}
        >
          {
            !small && (
              <time dateTime={place.isoDate}>{place.time}</time>
            )
          }
          <div>
            <span>{place.mainLabel}</span>
            {
              (!small && place.subLabel) && (
                <span className="kirk-itinerary-subtext">{place.subLabel}</span>
              )
            }
          </div>
        </li>
      ))
    }
    {
      showToDistance && (
        <li className="kirk-itinerary-fromArrival">
          <span>{places[places.length - 1].distanceFromPoint}</span>
        </li>
      )
    }
    <style jsx>{style}</style>
  </ul>
)

export default Itinerary
