import React from 'react'
import cc from 'classcat'
import { KIRK_LAYOUT_SOLID_ITEM_CLASS } from '_utils/layout'

interface DividerProps {
  readonly className?: Classcat.Class
}

const Divider = ({ className }: DividerProps) => (
    <div className={cc([KIRK_LAYOUT_SOLID_ITEM_CLASS, className])} aria-hidden='true'>
    </div>)

export default Divider
