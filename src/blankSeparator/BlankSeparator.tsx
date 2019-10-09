import React from 'react'
import cc from 'classcat'

interface BlankSeparatorProps {
  readonly className?: Classcat.Class
  readonly size?: BlankSeparatorSize
}

export enum BlankSeparatorSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

const BlankSeparator = ({ className }: BlankSeparatorProps) => (
  <div className={cc(className)} aria-hidden="true" />
)

export default BlankSeparator
