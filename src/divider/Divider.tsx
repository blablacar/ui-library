import React from 'react'
import cc from 'classcat'
import { KirkCard } from '_utils/layout'

interface DividerProps {
  readonly className?: Classcat.Class
}

const Divider = ({ className }: DividerProps) => (
    <KirkCard className={cc(className)} aria-hidden='true' ></KirkCard>)

export default Divider
