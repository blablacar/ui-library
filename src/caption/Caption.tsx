import React from 'react'
import cc from 'classcat'

import { Button, ButtonStatus } from '../button'
import { StyledCaption } from './Caption.style'

export const renderSecondary = (href?: string | JSX.Element, secondaryText?: string) =>
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
  href?: string | JSX.Element
  secondaryText?: string
}>

export const Caption = ({ className, children, href, secondaryText, isoDate }: CaptionProps) => (
  <StyledCaption className={cc(['kirk-caption', className])}>
    <time className="kirk-caption-time" dateTime={isoDate || null}>
      {children}
    </time>
    {secondaryText && (
      <span className="kirk-caption-secondary-content">{renderSecondary(href, secondaryText)}</span>
    )}
  </StyledCaption>
)
