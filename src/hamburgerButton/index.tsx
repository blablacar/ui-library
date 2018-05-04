import React from 'react'
import style from './style'

export interface HamburgerMenu{
  onClick: (event: React.MouseEvent<HTMLElement>) => void,
  open?: boolean,
}

const Hamburger = ({ open, onClick }: HamburgerMenu) => (
  <button aria-expanded={open ? 'true' : 'false'} onClick={onClick}>
    <i />
    <style jsx>{style}</style>
  </button>
)

export default Hamburger
