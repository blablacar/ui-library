import React from 'react'
import cc from 'classcat'

import { color } from '../../_utils/branding'
import { A11yProps, pickA11yProps } from '../../_utils/interfaces'
import { ChevronIcon, ChevronIconDirections } from '../../icon/chevronIcon'
import { StyledDropdownButton } from './DropdownButton.style'

export type DropdownButtonProps = A11yProps &
  Readonly<{
    onClick: (event: React.MouseEvent<HTMLElement>) => void
    children: React.ReactNode
    open?: boolean
    className?: string
    iconPosition?: 'left' | 'right'
  }>

export const DropdownButton = (props: DropdownButtonProps) => {
  const { open = false, children, onClick, className = '', iconPosition = 'right' } = props
  const a11yAttrs = pickA11yProps<DropdownButtonProps>(props)

  return (
    <StyledDropdownButton
      className={cc([
        'kirk-dropdownButton',
        {
          'kirk-dropdownButton--open': open,
        },
        className,
      ])}
    >
      <button {...a11yAttrs} aria-expanded={open} type="button" onClick={onClick}>
        {iconPosition === 'left' && (
          <ChevronIcon
            iconColor={color.lightMidnightGreen}
            direction={ChevronIconDirections.DOWN}
          />
        )}
        {children}
        {iconPosition === 'right' && (
          <ChevronIcon
            iconColor={color.lightMidnightGreen}
            direction={ChevronIconDirections.DOWN}
          />
        )}
      </button>
    </StyledDropdownButton>
  )
}
