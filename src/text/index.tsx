import React from 'react'
import cc from 'classcat'

import style from 'text/style'

enum TextDisplayType {
  'button',
  'body',
  'bodyStrong',
  'caption',
  'display1',
  'display2',
  'subheader',
  'subheaderStrong',
  'title',
  'titleStrong',
}

interface TextProps {
  readonly className?: Classcat.Class,
  readonly children: string | JSX.Element,
  readonly display?: TextDisplayType,
  readonly span?: boolean,
}

const Text = ({
  className,
  children,
  span = false,
  display = 'body',
}:TextProps) => {
  const Tag = span ? 'span' : 'div'
  const baseClassName = 'kirk-text'
  const displayClassName = `${baseClassName}-${display}`

  return <Tag className={cc([
    baseClassName,
    displayClassName,
    className,
  ])}>
    {children}
    <style jsx>{style}</style>
  </Tag>
}

export default Text
