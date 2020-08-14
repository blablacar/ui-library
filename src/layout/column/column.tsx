import React from 'react'
import cc from 'classcat'

export type ColumnProps = Readonly<{
  className?: string
  children?: React.ReactNode
  key?: string
}>

/**
 * A child component for <Columns> parent component.
 * See <Columns> component for details.
 */
export const Column = (props: ColumnProps) => {
  const { className, children, key } = props

  return (
    <li key={key} className={cc(['kirk-column', className])}>
      {children}
    </li>
  )
}
