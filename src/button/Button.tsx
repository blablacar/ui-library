import React, { PureComponent, Fragment } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import prefix from '_utils'
import { A11yProps, pickA11yProps } from '_utils/interfaces'
import Loader from 'loader'

export enum ButtonStatus {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  WARNING = 'warning',
  UNSTYLED = 'unstyled',
  LOADING = 'loading',
  CHECKED = 'checked',
}

export interface ButtonProps extends A11yProps {
  readonly children: string | number | React.ReactNode
  readonly type?: string
  readonly href?: string | JSX.Element
  readonly className?: Classcat.Class
  readonly title?: string
  readonly status?: ButtonStatus
  readonly focus?: boolean
  readonly isBubble?: boolean
  readonly shadowed?: boolean
  readonly onClick?: (event: React.MouseEvent<HTMLElement>) => void
  readonly onBlur?: (event: React.FocusEventHandler<HTMLElement>) => void
  readonly onFocus?: (event: React.FocusEventHandler<HTMLElement>) => void
  readonly onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void
  readonly onMouseUp?: (event: React.MouseEvent<HTMLElement>) => void
  readonly onTouchStart?: (event: React.TouchEvent<HTMLElement>) => void
  readonly onTouchEnd?: (event: React.TouchEvent<HTMLElement>) => void
  readonly onDoneAnimationEnd?: () => void
  readonly tabIndex?: string
  readonly disabled?: boolean
  readonly index?: string
  buttonRef?: (button: HTMLButtonElement) => void
}

export interface ButtonState {
  readonly value: {
    name: string
    value: string
  }
}

type ButtonActionEvents =
  | React.MouseEvent<HTMLElement>
  | React.TouchEvent<HTMLElement>
  | React.FocusEventHandler<HTMLElement>
type functionEvent = (event: ButtonActionEvents) => void

type TypeProps = {
  ref?: (button: HTMLButtonElement) => void
  title?: string
  href?: string
  type?: string
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  onFocus?: (event: React.FocusEventHandler<HTMLElement>) => void
  onBlur?: (event: React.FocusEventHandler<HTMLElement>) => void
  onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void
  onMouseUp?: (event: React.MouseEvent<HTMLElement>) => void
  onTouchStart?: (event: React.TouchEvent<HTMLElement>) => void
  onTouchEnd?: (event: React.TouchEvent<HTMLElement>) => void
  disabled?: boolean
  index?: string
}

export const eventHandler = (componentEvent: functionEvent, childEvent: functionEvent) => (
  event: ButtonActionEvents,
) => {
  componentEvent && componentEvent(event)
  childEvent && childEvent(event)
}

export default class Button extends PureComponent<ButtonProps, ButtonState> {
  private button: HTMLButtonElement

  static defaultProps: Partial<ButtonProps> = {
    type: 'button',
    href: '',
    children: '',
    className: '',
    status: ButtonStatus.PRIMARY,
    isBubble: false,
    shadowed: false,
    focus: false,
    disabled: false,
    buttonRef() {},
  }

  componentDidMount() {
    if (this.props.focus) {
      this.button.focus()
    }
  }

  componentDidUpdate(prevProps: ButtonProps) {
    const focusChanged = prevProps.focus !== this.props.focus
    if (focusChanged && this.props.focus) {
      this.button.focus()
    }
  }

  ref = (button: HTMLButtonElement) => {
    this.button = button
    this.props.buttonRef(button)
  }

  render() {
    const {
      children,
      className,
      type,
      href,
      title,
      index,
      // Modifiers
      status,
      isBubble,
      shadowed,
      // Actions
      onClick,
      onTouchStart,
      onTouchEnd,
      onMouseDown,
      onMouseUp,
      onBlur,
      onFocus,
      onDoneAnimationEnd,
      focus,
      disabled,
      buttonRef,
      // Extend case of the button for the expand component
      ...attrs
    } = this.props

    const a11yAttrs = pickA11yProps<ButtonProps>(this.props)

    let componentType
    let typeProps: TypeProps = {}

    // If we pass a component to href, we get component type and we merge props
    if (typeof href !== 'string') {
      componentType = href.type
      typeProps = { ...href.props }
    } else if (!isEmpty(href)) {
      componentType = 'a'
      typeProps = { href }
    } else {
      componentType = 'button'
      typeProps = { type }
    }

    const hasLoader = status === ButtonStatus.LOADING || status === ButtonStatus.CHECKED

    typeProps.ref = this.ref
    typeProps.title = title
    typeProps.index = index
    typeProps.onClick = eventHandler(onClick, typeProps.onClick)
    typeProps.onMouseDown = eventHandler(onMouseDown, typeProps.onMouseDown)
    typeProps.onMouseUp = eventHandler(onMouseUp, typeProps.onMouseUp)
    typeProps.onTouchStart = eventHandler(onTouchStart, typeProps.onTouchStart)
    typeProps.onTouchEnd = eventHandler(onTouchEnd, typeProps.onTouchEnd)
    typeProps.onFocus = eventHandler(onFocus, typeProps.onFocus)
    typeProps.onBlur = eventHandler(onBlur, typeProps.onBlur)
    typeProps.disabled = hasLoader || disabled

    const props = {
      className: cc([
        prefix({ button: true }),
        prefix(
          {
            [status]: status,
            bubble: isBubble || hasLoader,
            shadowed,
          },
          'kirk-button',
        ),
        className,
      ]),
      ...typeProps,
      ...attrs,
      ...a11yAttrs,
    }

    return React.createElement(
      componentType,
      props,
      <Fragment>
        {hasLoader && (
          <Loader
            size={48}
            inline
            done={status === ButtonStatus.CHECKED}
            onDoneAnimationEnd={onDoneAnimationEnd}
          />
        )}
        {!hasLoader && children}
      </Fragment>,
    )
  }
}
