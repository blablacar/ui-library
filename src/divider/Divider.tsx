import React from 'react'
import cc from 'classcat'

export interface DividerProps {
  readonly className?: string
}

export const Divider = ({ className }: DividerProps) => (
  <div className={cc(className)} aria-hidden="true" />
)
