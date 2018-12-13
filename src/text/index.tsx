import React, { Fragment } from 'react'
import cc from 'classcat'

import style from 'text/style'

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
  readonly children: string | number | React.ReactNode
  readonly display?: TextDisplayType
  readonly tag?: TextTagType
  readonly textColor?: string
  readonly newlineToBr?: boolean
  readonly role?: string
}

const replaceNewLineWithBR = (str: string): React.ReactNode =>
  str
    .split('\n')
    .map(line => <Fragment>{line}</Fragment>)
    .reduce((acc, curr) => (
      <Fragment>
        {acc}
        <br />
        {curr}
      </Fragment>
    ))

const Text = ({
  className,
  children,
  display = TextDisplayType.BODY,
  tag = TextTagType.SPAN,
  textColor,
  newlineToBr = true,
  role,
}: TextProps) => {
  const baseClassName = 'kirk-text'
  const displayClassName = `${baseClassName}-${display}`
  const Tag = tag

  const cssColorRegex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i

  const inlineStyle = cssColorRegex.test(textColor) ? { style: { color: textColor } } : null

  let content = children
  if (typeof children === 'string' && newlineToBr) {
    content = replaceNewLineWithBR(children)
  }

  return (
    <Tag role={role} className={cc([baseClassName, displayClassName, className])} {...inlineStyle}>
      {content}
      <style jsx global>
        {style}
      </style>
    </Tag>
  )
}

export default Text
