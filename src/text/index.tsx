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

interface TextProps {
  readonly className?: Classcat.Class,
  readonly children: string | number | React.ReactNode,
  readonly display?: TextDisplayType,
  readonly div?: boolean,
}

const Text = ({
  className,
  children,
  display = TextDisplayType.BODY,
  div = false,
}:TextProps) => {
  const Tag = div ? 'div' : 'span'
  const baseClassName = 'kirk-text'
  const displayClassName = `${baseClassName}-${display}`

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
