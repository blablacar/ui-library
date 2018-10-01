import React from 'react'
import cc from 'classcat'
import style from './style'
import { ChevronIcon } from 'icon'
import { color } from '_utils/branding'

export interface DropdownButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void,
  children: JSX.Element | string
  open?: boolean
  className?: ''
  iconPosition?: 'left' | 'right'
}

const DropdownButton = ({
  open = false,
  children,
  onClick,
  className = '',
  iconPosition = 'right',
}: DropdownButtonProps) => (
  <div
    className={cc([
      'kirk-dropdownButton',
      {
        'kirk-dropdownButton--open': open,
      },
    ])}>
    <button
      aria-expanded={open}
      type="button"
      className={className}
      onClick={onClick}>
        {iconPosition === 'left' && (
          <ChevronIcon iconColor={color.icon} down />
        )}
        {children}
        {iconPosition === 'right' && (
          <ChevronIcon iconColor={color.icon} down />
        )}
    </button>
    <style jsx>{style}</style>
  </div>
)

export default DropdownButton
