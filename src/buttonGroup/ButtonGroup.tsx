import React, { cloneElement } from 'react'
import cc from 'classcat'
import styled from 'styled-components'

import { prefix } from '../_utils'
import { space } from '../_utils/branding'
import { ButtonProps, ButtonStatus } from '../button'

export interface ButtonGroupProps {
  readonly children: React.ReactElement<ButtonProps>[]
  readonly className?: string
  readonly isInline?: boolean
  readonly isReverse?: boolean
  readonly loadingIndex?: string
}

const StyledButtonGroup = styled.div`
  & {
    display: flex;
  }

  &.kirk-button-group-column {
    flex-direction: column;
  }
  &.kirk-button-group-column .kirk-button {
    justify-content: center;
  }
  &.kirk-button-group-column > .kirk-button + .kirk-button {
    margin-top: ${space.m};
  }
  &.kirk-button-group-column > .kirk-button.kirk-button-loading,
  &.kirk-button-group-column > .kirk-button.kirk-button-checked {
    margin-left: auto;
    margin-right: auto;
  }

  &.kirk-button-group-column.kirk-button-group-reverse {
    flex-direction: column-reverse;
  }
  &.kirk-button-group-column.kirk-button-group-reverse > .kirk-button + .kirk-button {
    margin-bottom: ${space.m};
    margin-top: 0;
  }

  &.kirk-button-group-row {
    flex-direction: row;
    justify-content: space-between;
  }
  &.kirk-button-group-row > .kirk-button {
    flex-grow: 1;
    justify-content: center;
  }
  &.kirk-button-group-row > .kirk-button + .kirk-button {
    margin-left: ${space.l};
  }

  &.kirk-button-group-row.kirk-button-group-reverse {
    flex-direction: row-reverse;
  }
  &.kirk-button-group-row.kirk-button-group-reverse > .kirk-button + .kirk-button {
    margin-right: ${space.l};
    margin-left: 0;
  }
`

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
