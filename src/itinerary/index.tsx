import React from 'react'
import cc from 'classcat'

import style from 'itinerary/style'

interface ItineraryProps {
  readonly departure: Place,
  readonly arrival: Place,
  readonly className?: Classcat.Class,
  readonly showFromDistance?: boolean,
  readonly showToDistance?: boolean,
  readonly small?: boolean,
  readonly headline?: string,
}

const Itinerary = ({
  className, departure, arrival, showFromDistance, showToDistance, small = false, headline = null,
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
          <span>{departure.distanceFromPoint}</span>
        </li>
      )
    }
    <li className="kirk-itinerary-location kirk-itinerary--departure">
      {
        !small && (
          <time dateTime={departure.isoDate}>{departure.time}</time>
        )
      }
      <div>
        <span>{departure.mainLabel}</span>
        {
          (!small && departure.subLabel) && (
            <span className="kirk-itinerary-subtext">{departure.subLabel}</span>
          )
        }
      </div>
    </li>
    <li
      className={cc([
        'kirk-itinerary-location kirk-itinerary--arrival',
        { 'kirk-itinerary-location--fromArrival': showToDistance },
      ])}
    >
      {
        !small && (
          <time dateTime={arrival.isoDate}>{arrival.time}</time>
        )
      }
      <div>
        <span>{arrival.mainLabel}</span>
        {
          (!small && arrival.subLabel) && (
            <span className="kirk-itinerary-subtext">{arrival.subLabel}</span>
          )
        }
      </div>
    </li>
    {
      showToDistance && (
        <li className="kirk-itinerary-fromArrival">
          <span>{arrival.distanceFromPoint}</span>
        </li>
      )
    }
    <style jsx>{style}</style>
  </ul>
)

export default Itinerary
