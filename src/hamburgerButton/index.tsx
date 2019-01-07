import React from 'react'
import style from './style'

export interface HamburgerButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void
  open?: boolean
}

const HamburgerButton = ({ open = false, onClick }: HamburgerButtonProps) => (
  <button aria-expanded={open} onClick={onClick}>
    <i />
    <style jsx>{style}</style>
  </button>
)

export default HamburgerButton
