import React from 'react'
import cc from 'classcat'

import { replaceNewLineWithBR } from '../_utils'
import { A11yProps, pickA11yProps } from '../_utils/interfaces'

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

export type TextProps = A11yProps &
  Readonly<{
    className?: string
    children: string | number | React.ReactNode
    display?: TextDisplayType
    tag?: TextTagType
    textColor?: string
    newlineToBr?: boolean
    itemProp?: string
  }>

const baseClassName = 'kirk-text'
const cssColorRegex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i

export const Text = (props: TextProps) => {
  const {
    className,
    children,
    display = TextDisplayType.BODY,
    tag = TextTagType.SPAN,
    textColor,
    newlineToBr = true,
    itemProp = null,
  } = props
  const a11yAttrs = pickA11yProps<TextProps>(props)
  const displayClassName = `${baseClassName}-${display}`
  const Tag = tag

  const inlineStyle = cssColorRegex.test(textColor) ? { style: { color: textColor } } : null

  return (
    <Tag
      className={cc([baseClassName, displayClassName, className])}
      {...inlineStyle}
      {...(itemProp && { itemProp })}
      {...a11yAttrs}
    >
      {typeof children === 'string' && newlineToBr ? replaceNewLineWithBR(children) : children}
    </Tag>
  )
}
