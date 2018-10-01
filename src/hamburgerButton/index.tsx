import React from 'react'
import style from './style'

export interface HamburgerMenu{
  onClick: (event: React.MouseEvent<HTMLElement>) => void,
  open?: boolean,
}

const Hamburger = ({ open = false, onClick }: HamburgerMenu) => (
  <button aria-expanded={open} onClick={onClick}>
    <i />
    <style jsx>{style}</style>
  </button>
)

export default Hamburger
