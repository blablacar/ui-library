import React, { cloneElement } from 'react'
import cc from 'classcat'

import { prefix } from '../_utils'
import { ButtonProps, ButtonStatus } from '../button'
import { StyledButtonGroup } from './ButtonGroup.style'

export type ButtonGroupProps = Readonly<{
  children: React.ReactElement<ButtonProps>[]
  className?: string
  isInline?: boolean
  isReverse?: boolean
  loadingIndex?: string
}>

const BASE_CLASSNAME = 'button-group'

export const ButtonGroup = ({
  children,
  className = '',
  isInline = false,
  isReverse = false,
  loadingIndex = null,
}: ButtonGroupProps) => {
  const classNames = [
    `kirk-${BASE_CLASSNAME}`,
    className,
    prefix(
      {
        row: isInline,
        column: !isInline,
        reverse: isReverse,
      },
      BASE_CLASSNAME,
    ),
  ]

  const buttons = React.Children.toArray(children).filter(button => React.isValidElement(button))

  return (
    <StyledButtonGroup className={cc(classNames)}>
      {buttons.map((button, idx) => {
        const index: string = button.props.index || String(idx)
        const isLoading: boolean = Boolean(loadingIndex)
        const status: ButtonStatus =
          isLoading && index === loadingIndex ? ButtonStatus.LOADING : button.props.status
        const disabled = isLoading && index !== loadingIndex ? true : button.props.disabled

        const props: Partial<ButtonProps> = {
          ...button.props,
          index,
          status,
          disabled,
        }
        return cloneElement(button, props)
      })}
    </StyledButtonGroup>
  )
}
