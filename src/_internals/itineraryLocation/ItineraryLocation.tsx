import React, { Fragment, ReactNode, useLayoutEffect, useRef, useState } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '../../_utils/branding'
import { Place } from '../../_utils/place'
import { Bullet, BulletTypes } from '../../bullet'
import { ChevronIcon } from '../../icon/chevronIcon'
import { ConnectionIcon } from '../../icon/connectionIcon'
import { Text, TextDisplayType, TextTagType } from '../../text'
import { TextCaption } from '../../typography/caption'

export type ItineraryLocationProps = Readonly<{
  place: Place
  className?: string
  isSmall?: boolean
  isArrival?: boolean
  hasBottomAddon?: boolean
  hasTime?: boolean
  hasSubLabel?: boolean
  displaySubLabelOnly?: boolean
  displayConnection?: boolean
}>

export const computeKeyFromPlace = (place: Place) => {
  if (place.key && typeof place.key === 'string') {
    return place.key
  }

  if (typeof place.subLabel === 'string') {
    return `${place.mainLabel}-${place.subLabel}-${place.isoDate}`
  }

  return `${place.mainLabel}-${place.isoDate}`
}

const renderMeta = (mainLabel: string, subLabel: ReactNode) => (
  <Fragment>
    <meta itemProp="name" content={mainLabel} />
    <meta
      itemProp="address"
      content={subLabel && typeof subLabel === 'string' ? subLabel : mainLabel}
    />
  </Fragment>
)

const renderTime = (isoDate: string, time: string) => (
  <time dateTime={isoDate}>
    <Text tag={TextTagType.DIV} display={TextDisplayType.TITLESTRONG}>
      {time}
    </Text>
  </time>
)

const renderMainLabel = (label: string) => (
  <Text
    className="kirk-itineraryLocation-label-text"
    tag={TextTagType.PARAGRAPH}
    display={TextDisplayType.TITLESTRONG}
    textColor={color.midnightGreen}
  >
    {label}
  </Text>
)

const renderSubLabel = (label: ReactNode) =>
  typeof label === 'string' ? (
    <Text
      className="kirk-itineraryLocation-label-text"
      tag={TextTagType.PARAGRAPH}
      display={TextDisplayType.CAPTION}
      textColor={color.midnightGreen}
    >
      {label}
    </Text>
  ) : (
    <div>{label}</div>
  )

export const ItineraryLocation = ({
  place,
  className = '',
  isSmall = false,
  isArrival = false,
  hasBottomAddon = false,
  hasTime = false,
  hasSubLabel = false,
  displaySubLabelOnly = false,
  displayConnection = false,
}: ItineraryLocationProps) => {
  const baseClassName = 'kirk-itineraryLocation'
  const classNames = cc([
    baseClassName,
    {
      [`${baseClassName}--small`]: isSmall,
      [`${baseClassName}--withTime`]: hasTime,
      [`${baseClassName}--arrival`]: isArrival,
      [`${baseClassName}--withToAddon`]: hasBottomAddon,
    },
    className,
  ])
  const hasRoad = !isArrival || (isArrival && hasBottomAddon)
  const link = place.href
  let Component
  let hasChevron = false
  let hrefProps

  if (!isSmall && !isEmpty(link) && typeof link !== 'string') {
    Component = link.type
    hasChevron = true
    hrefProps = {
      ...link.props,
      className: cc([`${baseClassName}-wrapper`, link.props.className]),
    }
  } else if (!isSmall && typeof link === 'string') {
    Component = 'a'
    hasChevron = true
    hrefProps = {
      href: place.href,
      className: `${baseClassName}-wrapper`,
    }
  } else {
    Component = 'div'
    hrefProps = {
      className: `${baseClassName}-wrapper`,
    }
  }

  const renderLabel = (mainLabel: string, subLabel: ReactNode): ReactNode => {
    if (!displaySubLabelOnly) {
      return (
        <Fragment>
          {renderMainLabel(mainLabel)}
          {hasSubLabel && renderSubLabel(subLabel)}
        </Fragment>
      )
    }
    return renderSubLabel(subLabel)
  }

  const refConnection = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)
  useLayoutEffect(() => {
    setHeight(refConnection.current?.clientHeight)
  }, [])

  return (
    <li
      className={classNames}
      itemProp="location"
      itemScope
      itemType="http://schema.org/Place"
      aria-label={place.stepAriaLabel}
    >
      {renderMeta(place.mainLabel, place.subLabel)}
      <Component aria-label={place.actionAriaLabel} {...hrefProps}>
        {hasTime && renderTime(place.isoDate, place.time)}
        <div className="kirk-itineraryLocation-roadContainer" aria-hidden="true">
          <Bullet
            className="kirk-itineraryLocation-bullet"
            type={isSmall ? BulletTypes.SMALL : BulletTypes.DEFAULT}
          />
          {displayConnection && (
            <svg className="kirk-itineraryLocation-connectionRoad" width={8} height={height}>
              <line
                x1="5"
                x2="5"
                y1="0"
                y2="100%"
                stroke={color.lightMidnightGreen}
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray=".001, 10"
              />
            </svg>
          )}
          {!displayConnection && hasRoad && <div className="kirk-itineraryLocation-road" />}
        </div>
        <div className="kirk-itineraryLocation-label" ref={refConnection}>
          {renderLabel(place.mainLabel, place.subLabel)}
          {displayConnection && (
            <div className="kirk-itineraryLocation-connection">
              <ConnectionIcon className="kirk-itineraryLocation-connectionIcon" />
              <TextCaption>{place.connectionLabel}</TextCaption>
            </div>
          )}
        </div>
        {hasChevron && (
          <div className="kirk-itineraryLocation-chevron">
            <ChevronIcon />
          </div>
        )}
      </Component>
    </li>
  )
}
