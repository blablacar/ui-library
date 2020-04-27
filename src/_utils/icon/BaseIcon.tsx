import React from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import Badge from 'badge'
import { color } from '_utils/branding'

export interface IconProps extends Icon {
  readonly children: JSX.Element
  readonly viewBox?: string
}

export const BaseIconDefaultProps = {
  className: '',
  iconClassName: '',
  iconColor: color.lightMidnightGreen,
  size: 24,
  title: '',
  badgeAriaLabel: '',
  badgeContent: '',
}

const BaseIcon = ({
  className,
  iconClassName,
  iconColor,
  size,
  title,
  children,
  viewBox = '0 0 24 24',
  badgeContent,
  badgeAriaLabel,
}: IconProps) => {
  const iconClasses = ['kirk-icon', iconClassName]
  if (!badgeContent) {
    // When there is no badge, the icon is not wrapped and is the root element.
    // Therefore className classes needs to be added to the icon itself.
    iconClasses.push(className)
  }

  const icon = (
    <svg
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={cc(iconClasses)}
      width={size}
      height={size}
      aria-hidden={isEmpty(title)}
      fill={iconColor}
    >
      {title && <title>{title}</title>}
      {children}
    </svg>
  )

  if (badgeContent) {
    return (
      <div className={cc(['kirk-icon-wrapper', className])}>
        {icon}
        <Badge className="kirk-icon-badge" ariaLabel={badgeAriaLabel}>
          {badgeContent}
        </Badge>
      </div>
    )
  }

  return icon
}

export default BaseIcon
