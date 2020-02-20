import React from 'react'
import cc from 'classcat'
import { ColumnProps } from 'layout/column'

export interface ColumnsProps {
  readonly className?: Classcat.Class
  readonly children: React.ReactElement<ColumnProps>[]
}

/**
 * A parent component for <Column> component.
 * Each <Column> nested inside the parent <Columns> will share the horizontal space and get an equal
 * share of the available horizontal space.
 *
 * Only <Column> are valid children of <Columns>.
 */
const Columns = (props: ColumnsProps) => {
  const { className, children } = props

  return <ul className={cc([className])}>{children}</ul>
}

export default Columns
