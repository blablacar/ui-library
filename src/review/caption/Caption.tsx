import React from 'react'

import { Button, ButtonStatus } from '../../button'
import { TextCaption } from '../../typography/caption'
import { StyledCaption } from './Caption.style'

export type CaptionProps = Readonly<{
  children: string
  isoDate: string
  href?: string | JSX.Element
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  secondaryText?: string
}>

export const Caption = ({ children, href, onClick, secondaryText, isoDate }: CaptionProps) => (
  <StyledCaption>
    <time dateTime={isoDate}>
      <TextCaption>{children}</TextCaption>
    </time>
    {secondaryText && (
      <TextCaption>
        <Button status={ButtonStatus.UNSTYLED} href={href} onClick={onClick}>
          {secondaryText}
        </Button>
      </TextCaption>
    )}
  </StyledCaption>
)
