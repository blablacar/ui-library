import React from 'react'
import cc from 'classcat'

export interface DividerProps {
  readonly className?: string
}

const Divider = ({ className }: DividerProps) => (
  <div className={cc(className)} aria-hidden="true" />
)

export default Divider
