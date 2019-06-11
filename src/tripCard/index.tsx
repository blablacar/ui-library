import React, { Fragment } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import Avatar from 'avatar'
import ComfortIcon from 'icon/comfortIcon'
import LightningIcon from 'icon/lightningIcon'
import LadyIcon from 'icon/ladyIcon'
import Itinerary from 'itinerary'
import Item from '_utils/item'
import Text, { TextDisplayType } from 'text'
import style from 'tripCard/style'
import { color } from '_utils/branding'

interface User {
  avatarUrl: string
  firstName: string
}

export interface TripCardProps {
  href: string | JSX.Element
  itinerary: Place[]
  driver?: User
  passengers?: User[]
  price: string
  flags?: {
    ladiesOnly?: boolean
    maxTwo?: boolean
    autoApproval?: boolean
  }
  titles?: {
    ladiesOnly?: string
    maxTwo?: string
    autoApproval?: string
  }
  metaUrl: string
  highlighted?: string
  className?: Classcat.Class
  statusInformation?: {
    icon: JSX.Element,
    text: string,
    highlighted?: boolean,
  }
  badge?: string
  title?: string
}

const TripCard = ({
  className,
  href,
  itinerary,
  driver,
  passengers = [],
  price,
  flags = {},
  titles = {},
  highlighted = '',
  metaUrl,
  statusInformation = null,
  badge = null,
  title = null,
}: TripCardProps) => {
  const departure = itinerary[0]
  const arrival = itinerary[itinerary.length - 1]
  const displayFlags = isEmpty(highlighted) && !isEmpty(flags)
  const itemPropName = `${departure.mainLabel} → ${arrival.mainLabel}`

  let componentTag
  let componentProps = {}

  // If we pass a component to href, we get component type and we merge props
  if (typeof href !== 'string') {
    componentTag = href.type
    componentProps = {
      ...href.props,
      rel: 'nofollow',
    }
  } else {
    componentTag = 'a'
    componentProps = {
      href,
      rel: 'nofollow',
    }
  }

  return (
    <li
      className={cc(['kirk-tripCard', {
        'kirk-tripCard--highlighted': !!highlighted,
        'kirk-tripCard--with-badge': badge && badge.length,
      }, className])}
      itemScope
      itemType="http://schema.org/Event"
    >
      {React.createElement(
        componentTag,
        componentProps,
        <Fragment>
          <meta itemProp="url" content={metaUrl} />
          <meta itemProp="name" content={itemPropName} />
          <meta itemProp="startDate" content={departure.isoDate} />
          <meta itemProp="endDate" content={arrival.isoDate} />

          {badge && (
            <Text
              className="kirk-tripCard-badge"
              textColor={color.white}>
              {badge}
            </Text>
          )}

          {statusInformation && (
            <div className="kirk-tripCard-top">
              <Item
                className="kirk-tripCard-top-item"
                leftAddon={React.cloneElement(statusInformation.icon, {
                  iconColor: statusInformation.highlighted ? color.primary : color.icon
                })}
                leftTitle={statusInformation.text}
                leftTitleDisplay={TextDisplayType.BODY}
                highlighted={statusInformation.highlighted}
              />
            </div>
          )}

          {title && (
            <Text display={TextDisplayType.TITLE} className="kirk-tripCard-title">{title}</Text>
          )}

          <div className="kirk-tripCard-main">
            <Itinerary className="kirk-tripCard-itinerary" places={itinerary} />
            <Text className="kirk-tripCard-price" display={TextDisplayType.TITLESTRONG}>
              {price}
            </Text>
          </div>
          <div className="kirk-tripCard-bottom">
            {driver && (
              <div className="kirk-tripCard-driver">
                <div className="kirk-tripCard-avatar">
                  <Avatar image={driver.avatarUrl} />
                </div>
                <Text display={TextDisplayType.TITLE}>{driver.firstName}</Text>
              </div>
            )}
            {passengers && (
              <ul className="kirk-tripCard-passengers">
                {passengers.reverse().map(passenger => (
                  <li className="kirk-tripCard-avatar" key={passenger.firstName}>
                    <Avatar image={passenger.avatarUrl} isSmall />
                  </li>
                ))}
              </ul>
            )}
            {highlighted && (
              <Text className="kirk-tripCard-topText" display={TextDisplayType.TITLESTRONG}>
                {highlighted}
              </Text>
            )}
            {displayFlags && (
              <div className="kirk-tripCard-flags">
                {flags.ladiesOnly && <LadyIcon title={titles.ladiesOnly || ''} />}
                {flags.maxTwo && <ComfortIcon title={titles.maxTwo || ''} />}
                {flags.autoApproval && <LightningIcon title={titles.autoApproval || ''} />}
              </div>
            )}
          </div>
        </Fragment>,
      )}
      <style jsx>{style}</style>
    </li>
  )
}

export default TripCard
