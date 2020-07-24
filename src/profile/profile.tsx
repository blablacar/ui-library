import React from 'react'
import cc from 'classcat'

import { Item } from '../_internals/item'
import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { Avatar } from '../avatar'
import { Rating } from '../rating'
import { TextDisplayType } from '../text'
import { TextBody } from '../typography/body'

export interface ProfileProps extends A11yProps {
  readonly className?: string
  readonly title: string
  readonly info?: string | JSX.Element
  readonly isLink?: boolean
  readonly picture?: string
  readonly alt?: string
  readonly isIdChecked?: boolean
  readonly isMedium?: boolean
  readonly score?: number
  readonly ratings?: number
  readonly ratingsLabel?: string
  readonly href?: string | JSX.Element
  readonly onClick?: (event: React.MouseEvent<HTMLElement>) => void
  readonly onBlur?: (event: React.FocusEventHandler<HTMLElement>) => void
  readonly onFocus?: (event: React.FocusEventHandler<HTMLElement>) => void
  readonly onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void
}

export const Profile = (props: ProfileProps) => {
  const {
    className,
    title,
    info,
    picture,
    alt,
    isIdChecked,
    isMedium,
    isLink,
    score,
    ratings,
    ratingsLabel,
    href,
    onClick,
    onBlur,
    onFocus,
    onMouseDown,
  } = props
  const a11yAttrs = pickA11yProps<ProfileProps>(props)
  const getLeftBody =
    ratings > 0 ? (
      <Rating ratings={ratings} score={score}>
        {ratingsLabel}
      </Rating>
    ) : (
      info && <TextBody>{info}</TextBody>
    )

  const showChevron = isLink || !!href || !!onClick

  return (
    <Item
      className={cc([className, { 'kirk-profile-size-medium': isMedium }])}
      leftTitle={title}
      leftTitleDisplay={isMedium ? TextDisplayType.DISPLAY1 : TextDisplayType.TITLE}
      leftBody={getLeftBody}
      rightAddon={
        picture && (
          <Avatar image={picture} alt={alt} isIdChecked={isIdChecked} isMedium={isMedium} />
        )
      }
      chevron={showChevron}
      href={href}
      onClick={onClick}
      onBlur={onBlur}
      onFocus={onFocus}
      onMouseDown={onMouseDown}
      isClickable={showChevron}
      {...a11yAttrs}
    />
  )
}
