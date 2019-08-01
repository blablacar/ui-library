import React from 'react'
import cc from 'classcat'

import prefix from '_utils'
import { color } from '_utils/branding'
import Badge from 'badge'
import CheckIcon from 'icon/checkIcon'

export interface AvatarInterface {
  readonly className?: Classcat.Class
  readonly image?: string
  readonly alt?: string
  readonly isSmall?: boolean
  readonly isMedium?: boolean
  readonly isLarge?: boolean
  readonly isIdChecked?: boolean
  readonly unreadNotificationsCount?: string
  readonly unreadNotificationsCountAriaLabel?: string
}

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
    ariaLabel={unreadNotificationsCountAriaLabel}
  >
    {unreadNotificationsCount}
  </Badge>
)

const Avatar = ({
  isSmall,
  isMedium,
  isLarge,
  className,
  image,
  alt = '',
  isIdChecked,
  unreadNotificationsCount,
  unreadNotificationsCountAriaLabel,
}: AvatarInterface) => (
  <div
    className={cc([
      prefix({ small: isSmall, medium: isMedium, large: isLarge, image: !!image }, 'kirk-avatar-'),
      className,
      'kirk-avatar',
    ])}
  >
    {image && <img src={image} alt={alt} />}
    {unreadNotificationsCount &&
      unreadNotificationsBadge(unreadNotificationsCount, unreadNotificationsCountAriaLabel)}
    {isIdChecked && IdCheckBadge}
  </div>
)

export default Avatar
