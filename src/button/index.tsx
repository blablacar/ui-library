import React, { PureComponent, Fragment } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import prefix from '_utils'
import style from 'button/style'
import Loader from 'loader'

export enum ButtonStatus {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  WARNING = 'warning',
  UNSTYLED = 'unstyled',
  LOADING = 'loading',
  CHECKED = 'checked',
}

export interface ButtonProps {
  readonly type?: string
  readonly href?: string | JSX.Element
  readonly children?: string | number | React.ReactNode
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
}

export const eventHandler = (componentEvent: functionEvent, childEvent: functionEvent) => (
  event: ButtonActionEvents,
) => {
  componentEvent && componentEvent(event)
  childEvent && childEvent(event)
}

export default class Button extends PureComponent<ButtonProps, ButtonState> {
  private button: HTMLButtonElement

  static STATUS = ButtonStatus

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
  }

  componentDidMount() {
    if (this.props.focus) {
      this.button.focus()
    }
  }

  componentWillReceiveProps({ focus }: ButtonProps) {
    if (focus && focus !== this.props.focus) {
      this.button.focus()
    }
  }

  ref = (button: HTMLButtonElement) => {
    this.button = button
  }

  render() {
    const {
      children,
      className,
      type,
      href,
      title,
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
      // Extend case of the button for the expand component
      ...attrs
    } = this.props

    let componentType: tag
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
        {children}
        <style jsx>{style}</style>
      </Fragment>,
    )
  }
}
