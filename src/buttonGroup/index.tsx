import React, { cloneElement } from 'react'
import cc from 'classcat'

import prefix from '_utils'
import style from 'buttonGroup/style'
import Button, { ButtonProps, ButtonStatus } from 'button'

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
        const index: string = button.props.index || idx
        const isLoading: boolean = Boolean(loadingIndex)
        const status: ButtonStatus = isLoading && index === loadingIndex
          ? Button.STATUS.LOADING
          : button.props.status
        const disabled = isLoading && index !== loadingIndex ? true : button.props.disabled

        const props: Partial<ButtonProps> = {
          ...button.props,
          index,
          status,
          disabled,
        }
        return cloneElement(button as React.ReactElement<Button>, props as Partial<Button>)
      })}

      <style jsx>{style}</style>
    </div>
  )
}

export default ButtonGroup
