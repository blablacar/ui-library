import React from 'react'
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
}

const Text = ({
  className,
  children,
  display = TextDisplayType.BODY,
  tag = TextTagType.SPAN,
}:TextProps) => {
  const baseClassName = 'kirk-text'
  const displayClassName = `${baseClassName}-${display}`
  const Tag = tag

  return (
    <Tag className={cc([
      baseClassName,
      displayClassName,
      className,
    ])}>
      {children}
      <style jsx global>{style}</style>
    </Tag>
  )
}

export default Text
