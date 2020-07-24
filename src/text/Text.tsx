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

export interface TextProps extends A11yProps {
  readonly className?: string
  readonly children: string | number | React.ReactNode
  readonly display?: TextDisplayType
  readonly tag?: TextTagType
  readonly textColor?: string
  readonly newlineToBr?: boolean
  readonly itemProp?: string
}

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
