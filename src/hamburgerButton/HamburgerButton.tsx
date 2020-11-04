import React from 'react'
import cc from 'classcat'

import { StyledHamburgerButton } from './HamburgerButton.style'

export type HamburgerButtonProps = Readonly<{
  onClick: (event: React.MouseEvent<HTMLElement>) => void
  open?: boolean
  className?: string
}>

export const HamburgerButton = ({ open = false, onClick, className }: HamburgerButtonProps) => (
  <StyledHamburgerButton className={cc([className])} aria-expanded={open} onClick={onClick}>
    <i />
  </StyledHamburgerButton>
)
