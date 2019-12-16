import React from 'react'
import cc from 'classcat'
import { KIRK_LAYOUT_SOLID_ITEM_CLASS } from '_utils/layout'

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
  <div className={cc([KIRK_LAYOUT_SOLID_ITEM_CLASS, className])} aria-hidden="true" />
)

export default BlankSeparator
