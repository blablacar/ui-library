import React from 'react'
import cc from 'classcat'

export interface HamburgerButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void
  open?: boolean
  readonly className?: string
}

export const HamburgerButton = ({ open = false, onClick, className }: HamburgerButtonProps) => (
  <button className={cc([className])} aria-expanded={open} onClick={onClick}>
    <i />
  </button>
)
