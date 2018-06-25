import React, { PureComponent } from 'react'
import cc from 'classcat'

import prefix from '_utils'
import { color, transition } from '_utils/branding'
import style from 'button/style'

import Loader from 'loader'
import Circle from 'icon/circleIcon'
import Check from 'icon/checkIcon'

export enum ButtonStatus {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  WARNING = 'warning',
  UNSTYLED = 'unstyled',
  LOADING = 'loading',
  CHECKED = 'checked',
}

export interface ButtonProps {
  readonly type?: string,
  readonly href?: string | JSX.Element,
  readonly children?: string | number | React.ReactNode,
  readonly className?: Classcat.Class,
  readonly title?: string,
  readonly status?: ButtonStatus,
  readonly focus?: boolean,
  readonly icon?: boolean,
  readonly shadowed?: boolean,
  readonly hidden?: boolean,
  readonly onClick?: (event: React.MouseEvent<HTMLElement>) => void,
  readonly onBlur?: (event: React.FocusEventHandler<HTMLElement>) => void,
  readonly onFocus?: (event: React.FocusEventHandler<HTMLElement>) => void,
  readonly onDoneAnimationEnd?: () => void,
  readonly tabIndex?: string,
  readonly disabled?: boolean,
}

export interface ButtonState {
  readonly value: {
    name: string,
    value: string,
  },
}

type ButtonActionEvents = React.MouseEvent<HTMLElement> | React.FocusEventHandler<HTMLElement>
type functionEvent = (event: ButtonActionEvents) => void

type TypeProps = {
  ref?: (button: HTMLButtonElement) => void,
  title?: string,
  href?: string,
  type?: string,
  onClick?: (event: React.MouseEvent<HTMLElement>) => void,
  onFocus?: (event: React.FocusEventHandler<HTMLElement>) => void,
  onBlur?: (event: React.FocusEventHandler<HTMLElement>) => void,
}

export const eventHandler = (
  componentEvent: functionEvent,
  childEvent: functionEvent,
) => (event: ButtonActionEvents) => {
  componentEvent && componentEvent(event)
  childEvent && childEvent(event)
}

export default class Button extends PureComponent <ButtonProps, ButtonState> {
  private button: HTMLButtonElement

  static STATUS = ButtonStatus

  static defaultProps: Partial<ButtonProps> = {
    type: 'button',
    href: '',
    children: '',
    className: '',
    status: ButtonStatus.PRIMARY,
    icon: false,
    shadowed: false,
    focus: false,
    disabled: false,
  }

  componentDidMount() {
    if (this.props.focus) {
      this.button.focus()
    }
  }

  componentWillReceiveProps({ status, focus }: ButtonProps) {
    if (focus && focus !== this.props.focus) {
      this.button.focus()
    }
  }

  ref = (button: HTMLButtonElement) => {
    this.button = button
  }

  render() {
    const {
      children, className, type, href, title,
      // Modifiers
      status, icon, shadowed,
      // Actions
      onClick, onBlur, onFocus, onDoneAnimationEnd, focus,
      // Extend case of the button for the expand component
      ...attrs
    } = this.props

    let Component: tag
    let typeProps: TypeProps = {}

    // If we pass a component to href, we get component type and we merge props
    if (typeof href !== 'string') {
      Component = href.type
      typeProps = { ...href.props }
    } else if (href.length > 0) {
      Component = 'a'
      typeProps = { href }
    } else {
      Component = 'button'
      typeProps = { type }
    }

    typeProps.ref = this.ref
    typeProps.title = title
    typeProps.onClick = eventHandler(onClick, typeProps.onClick)
    typeProps.onFocus = eventHandler(onFocus, typeProps.onFocus)
    typeProps.onBlur = eventHandler(onBlur, typeProps.onBlur)

    const hasLoader = status === ButtonStatus.LOADING || status === ButtonStatus.CHECKED
    const iconSize = icon || hasLoader

    return (
      <Component
        className={cc([
          prefix({ button: true }),
          prefix({
            [status]: status, icon: iconSize, shadowed,
          }, 'kirk-button'),
          className,
        ])}
        {...typeProps}
        {...attrs}
      >
        {hasLoader && <Loader
          size={48}
          inline
          done={status === ButtonStatus.CHECKED}
          onDoneAnimationEnd={onDoneAnimationEnd}
        />}
        <span>{children}</span>
        <style jsx>{style}</style>
      </Component>
    )
  }
}
