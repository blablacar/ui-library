import React from 'react'
import cc from 'classcat'

import { A11yProps, pickA11yProps } from '../../_utils/interfaces'
import { StyledHamburgerButton } from './HamburgerButton.style'

export type HamburgerButtonProps = A11yProps &
  Readonly<{
    onClick: (event: React.MouseEvent<HTMLElement>) => void
    open?: boolean
    className?: string
  }>

export const HamburgerButton = (props: HamburgerButtonProps) => {
  const { open = false, onClick, className } = props
  const a11yAttrs = pickA11yProps<HamburgerButtonProps>(props)

  return (
    <StyledHamburgerButton
      className={cc([className])}
      {...a11yAttrs}
      aria-expanded={open}
      onClick={onClick}
    >
      <i />
    </StyledHamburgerButton>
  )
}
