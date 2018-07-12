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
}

export enum TextContainerType {
  DIV = 'div',
  PARAGRAPH = 'p',
  SPAN = 'span',
}

interface TextProps {
  readonly className?: Classcat.Class,
  readonly children: string | number | React.ReactNode,
  readonly display?: TextDisplayType,
  readonly container?: TextContainerType,
}

const Text = ({
  className,
  children,
  display = TextDisplayType.BODY,
  container = TextContainerType.SPAN,
}:TextProps) => {
  const baseClassName = 'kirk-text'
  const displayClassName = `${baseClassName}-${display}`
  const Container = container

  return (
    <Container className={cc([
      baseClassName,
      displayClassName,
      className,
    ])}>
      {children}
      <style jsx global>{style}</style>
    </Container>
  )
}

export default Text
