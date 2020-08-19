import React from 'react'
import cc from 'classcat'

import { Button, ButtonStatus } from '../button'
import { StyledCaption } from './Caption.style'

export const renderSecondary = (href?: string, secondaryText?: string) =>
  href ? (
    <Button status={ButtonStatus.UNSTYLED} href={href}>
      {secondaryText}
    </Button>
  ) : (
    <span>{secondaryText}</span>
  )

export type CaptionProps = Readonly<{
  className?: string
  children: any
  isoDate: string
  href?: string
  secondaryText?: string
}>

export const Caption = ({ className, children, href, secondaryText, isoDate }: CaptionProps) => (
  <StyledCaption className={cc(['kirk-caption', className])}>
    <time dateTime={isoDate || null}>{children}</time>
    {secondaryText && <span> - {renderSecondary(href, secondaryText)}</span>}
  </StyledCaption>
)
