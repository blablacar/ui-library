import React, { cloneElement } from 'react'
import cc from 'classcat'

import prefix from '_utils'
import { ButtonStatus } from 'button'
import { ButtonProps } from 'button/Button'

export interface ButtonGroupProps {
  readonly children: React.ReactElement<ButtonProps>[]
  readonly className?: Classcat.Class
  readonly isInline?: boolean
  readonly isReverse?: boolean
  readonly loadingIndex?: string
}

const [BASE_CLASSNAME] = prefix({ 'button-group': true })

const ButtonGroup = ({
  children,
  className = '',
  isInline = false,
  isReverse = false,
  loadingIndex = null,
}: ButtonGroupProps) => {
  const classNames = [
    BASE_CLASSNAME,
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

  const buttons = React.Children
    .toArray(children)
    .filter(button => React.isValidElement(button))

  return (
    <div className={cc(classNames)}>
      {buttons.map((button, idx) => {
        const index: string = button.props.index || String(idx)
        const isLoading: boolean = Boolean(loadingIndex)
        const status: ButtonStatus = isLoading && index === loadingIndex
          ? ButtonStatus.LOADING
          : button.props.status
        const disabled = isLoading && index !== loadingIndex ? true : button.props.disabled

        const props: Partial<ButtonProps> = {
          ...button.props,
          index,
          status,
          disabled,
        }
        return cloneElement(button, props)
      })}

    </div>
  )
}

export default ButtonGroup
