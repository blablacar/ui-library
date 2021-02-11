import React from 'react'
import isEmpty from 'lodash.isempty'

import { Bullet } from '../../bullet'
import { TextTitleStrong } from '../../typography/titleStrong'
import { StyledItineraryItem } from './ItineraryItem.style'
import { Line, LineProps } from './Line'

export type ItineraryItemProps = LineProps &
  Readonly<{
    time?: string
    children: React.ReactNode
    href?: string | JSX.Element
  }>

export const ItineraryItem = ({
  time = null,
  prevLine,
  nextLine,
  children,
  bullet = <Bullet />,
  href = null,
}: ItineraryItemProps) => {
  // Renders <a>, custom component (SlugLink) or div based on href
  let Wrapper
  let wrapperProps = {}

  if (!isEmpty(href) && typeof href !== 'string') {
    Wrapper = href.type
    wrapperProps = href.props
  } else if (typeof href === 'string') {
    Wrapper = 'a'
    wrapperProps = { href }
  } else {
    Wrapper = 'div'
  }

  return (
    <StyledItineraryItem>
      <Wrapper {...wrapperProps}>
        <TextTitleStrong as="time" aria-hidden={isEmpty(time)}>
          {time}
        </TextTitleStrong>
        <Line prevLine={prevLine} nextLine={nextLine} bullet={bullet} />
        {children}
      </Wrapper>
    </StyledItineraryItem>
  )
}
