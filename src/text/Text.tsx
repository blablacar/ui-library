import React from 'react'
import cc from 'classcat'

import { replaceNewLineWithBR } from '_utils'

export enum TextDisplayType {
  BODY = 'body',
  BODYSTRONG = 'bodyStrong',
  BUTTON = 'button',
  CAPTION = 'caption',
  DISPLAY1 = 'display1',
  DISPLAY2 = 'display2',
  SUBHEADER = 'subheader',
  SUBHEADERSTRONG = 'subheaderStrong',
  TITLE = 'title',
  TITLESTRONG = 'titleStrong',
}

export enum TextTagType {
  DIV = 'div',
  PARAGRAPH = 'p',
  SPAN = 'span',
}

interface TextProps {
  readonly className?: Classcat.Class
  readonly extraClassName?: Classcat.Class
  readonly children: string | number | React.ReactNode
  readonly display?: TextDisplayType
  readonly tag?: TextTagType
  readonly textColor?: string
  readonly newlineToBr?: boolean
  readonly role?: string
}

const baseClassName = 'kirk-text'
const cssColorRegex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i

const Text = ({
  className,
  children,
  display = TextDisplayType.BODY,
  tag = TextTagType.SPAN,
  textColor,
  newlineToBr = true,
  role,
  extraClassName,
}: TextProps) => {
  const displayClassName = `${baseClassName}-${display}`
  const Tag = tag

  const inlineStyle = cssColorRegex.test(textColor) ? { style: { color: textColor } } : null

  return (
    <Tag
      role={role}
      className={cc([baseClassName, displayClassName, className, extraClassName])}
      {...inlineStyle}
    >
      {typeof children === 'string' && newlineToBr ? replaceNewLineWithBR(children) : children}
    </Tag>
  )
}

export default Text
