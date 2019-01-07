import React from 'react'

import Avatar from 'avatar'
import Rating from 'rating'
import Text, { TextDisplayType } from 'text'
import Item from '_utils/item'

interface ProfileProps {
  readonly className?: Classcat.Class
  readonly title: string
  readonly info?: string
  readonly isLink?: boolean
  readonly picture?: string
  readonly alt?: string
  readonly isIdChecked?: boolean
  readonly isMedium?: boolean
  readonly score?: number
  readonly ratings?: number
  readonly ratingsLabel?: string
}

const Profile = ({
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
}: ProfileProps) => {
  const getLeftBody =
    ratings > 0 ? (
      <Rating ratings={ratings} score={score}>
        {ratingsLabel}
      </Rating>
    ) : (
      info && <Text>{info}</Text>
    )

  return (
    <Item
      className={className}
      leftTitle={title}
      leftTitleDisplay={isMedium ? TextDisplayType.DISPLAY2 : TextDisplayType.TITLE}
      leftBody={getLeftBody}
      rightAddon={
        picture && (
          <Avatar image={picture} alt={alt} isIdChecked={isIdChecked} isMedium={isMedium} />
        )
      }
      chevron={isLink}
    />
  )
}

export default Profile
