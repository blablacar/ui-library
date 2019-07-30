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
  iconColor: color.icon,
  size: 24,
  title: '',
  badgeAriaLabel: '',
  badgeContent: '',
}

const BaseIcon = ({
  className,
  iconColor,
  size,
  title,
  children,
  viewBox = '0 0 24 24',
  badgeContent,
  badgeAriaLabel,
}: IconProps) => {
  const icon = (
    <svg
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={cc(['kirk-icon', className])}
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
      <div className="kirk-icon-wrapper">
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
