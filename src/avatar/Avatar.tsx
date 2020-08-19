import React from 'react'
import cc from 'classcat'

import { prefix } from '../_utils'
import { color } from '../_utils/branding'
import { Badge } from '../badge'
import { CheckIcon } from '../icon/checkIcon'
import { StyledAvatar } from './Avatar.style'

export type AvatarProps = Readonly<{
  className?: string
  image?: string
  alt?: string
  isSmall?: boolean
  isMedium?: boolean
  isLarge?: boolean
  isIdChecked?: boolean
  unreadNotificationsCount?: string
  unreadNotificationsCountAriaLabel?: string
}>

const IdCheckBadge = (
  <Badge className="kirk-avatar-badge--idCheck">
    <CheckIcon size="100%" iconColor={color.white} />
  </Badge>
)

const unreadNotificationsBadge = (
  unreadNotificationsCount: string,
  unreadNotificationsCountAriaLabel: string,
) => (
  <Badge
    className="kirk-avatar-badge--unreadNotifications"
    aria-label={unreadNotificationsCountAriaLabel}
  >
    {unreadNotificationsCount}
  </Badge>
)

export const Avatar = ({
  isSmall,
  isMedium,
  isLarge,
  className,
  image,
  alt = '',
  isIdChecked,
  unreadNotificationsCount,
  unreadNotificationsCountAriaLabel,
}: AvatarProps) => (
  <StyledAvatar
    className={cc([
      prefix({ small: isSmall, medium: isMedium, large: isLarge, image: !!image }, 'avatar-'),
      className,
      'kirk-avatar',
    ])}
  >
    {image && <img src={image} alt={alt} />}
    {unreadNotificationsCount &&
      unreadNotificationsBadge(unreadNotificationsCount, unreadNotificationsCountAriaLabel)}
    {isIdChecked && IdCheckBadge}
  </StyledAvatar>
)
