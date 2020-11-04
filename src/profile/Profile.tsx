import React from 'react'
import cc from 'classcat'

import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { Avatar } from '../avatar'
import { Rating } from '../rating'
import { TextDisplayType } from '../text'
import { TextBody } from '../typography/body'
import { StyledProfile } from './Profile.style'

export type ProfileProps = A11yProps &
  Readonly<{
    className?: string
    title: string
    info?: string | JSX.Element
    isLink?: boolean
    picture?: string
    alt?: string
    isIdChecked?: boolean
    isMedium?: boolean
    score?: number
    ratings?: number
    ratingsLabel?: string
    href?: string | JSX.Element
    onClick?: (event: React.MouseEvent<HTMLElement>) => void
    onBlur?: (event: React.FocusEventHandler<HTMLElement>) => void
    onFocus?: (event: React.FocusEventHandler<HTMLElement>) => void
    onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void
  }>

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
  const showChevron = isLink || !!href || !!onClick
  const getLeftBody =
    ratings > 0 ? (
      <Rating ratings={ratings} score={score}>
        {ratingsLabel}
      </Rating>
    ) : (
      info && <TextBody>{info}</TextBody>
    )

  return (
    <StyledProfile
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
