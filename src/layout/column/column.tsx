import React from 'react'
import cc from 'classcat'

export interface ColumnProps {
  readonly className?: Classcat.Class
  readonly children?: React.ReactNode
}

/**
 * A child component for <Columns> parent component.
 * See <Columns> component for details.
 */
const Column = (props: ColumnProps) => {
  const { className, children } = props

  return (
    <div role="presentation" className={cc(['kirk-column', className])}>
      {children}
    </div>
  )
}

export default Column
