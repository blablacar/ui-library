import React from 'react'
import cc from 'classcat'

import Button from 'button'

export const renderSecondary = (href?: string, secondaryText?: string) =>
  href ? (
    <Button status={Button.STATUS.UNSTYLED} href={href}>
      {secondaryText}
    </Button>
  ) : (
    <span>{secondaryText}</span>
  )

interface Caption {
  readonly className?: Classcat.Class
  readonly extraClassName?: Classcat.Class
  readonly children: any
  readonly isoDate: string
  readonly href?: string
  readonly secondaryText?: string
}

const Caption = ({
  className,
  extraClassName,
  children,
  href,
  secondaryText,
  isoDate,
}: Caption) => (
  <div className={cc(['kirk-caption', className, extraClassName])}>
    <time dateTime={isoDate || null}>{children}</time>
    {secondaryText && <span> - {renderSecondary(href, secondaryText)}</span>}
  </div>
)

export default Caption
