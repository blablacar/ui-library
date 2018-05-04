import React, { PureComponent } from 'react'
import cc from 'classcat'

import prefix from '_utils'
import { color, transition } from '_utils/branding'
import style from 'button/style'

import Loader from 'loader'
import Circle from 'icon/circleIcon'
import Check from 'icon/checkIcon'

export interface ButtonProps {
  readonly type?: string,
  readonly href?: string | JSX.Element,
  readonly children?: string | number | React.ReactNode,
  readonly className?: Classcat.Class,
  readonly title?: string,
  readonly primary?: boolean,
  readonly secondary?: boolean,
  readonly loading?: boolean,
  readonly valid?: boolean,
  readonly warning?: boolean,
  readonly focus?: boolean,
  readonly icon?: boolean,
  readonly unstyled?: boolean,
  readonly bordered?:boolean,
  readonly hidden?: boolean,
  readonly onClick?: (event: React.MouseEvent<HTMLElement>) => void,
  readonly onBlur?: (event: React.FocusEventHandler<HTMLElement>) => void,
  readonly onFocus?: (event: React.FocusEventHandler<HTMLElement>) => void,
  readonly validated?: (event: Event) => void,
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

  static defaultProps: Partial<ButtonProps> = {
    type: 'button',
    href: '',
    children: '',
    className: '',
    primary: false,
    secondary: false,
    loading: false,
    valid: false,
    warning: false,
    icon: false,
    unstyled: false,
    bordered: false,
    focus: false,
    disabled: false,
  }

  validated = () => {
    const timeout = parseInt(transition.duration.fast, 10) + transition.callbackDelay
    setTimeout(this.props.validated, timeout)
  }

  componentDidMount() {
    if (this.props.valid) {
      this.validated()
    }
    if (this.props.focus) {
      this.button.focus()
    }
  }

  componentWillReceiveProps({ valid, focus }: ButtonProps) {
    if (valid && valid !== this.props.valid) {
      this.validated()
    }
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
      primary, secondary, valid, loading, warning, icon, unstyled, bordered,
      // Actions
      onClick, onBlur, onFocus, validated, focus,
      // Extend case of the button for the expand component
      ...attrs,
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

    return (
      <Component
        className={cc([
          prefix({ button: true }),
          prefix({
            primary, secondary, loading, valid, warning, icon, unstyled, bordered,
          }, 'kirk-button'),
          className,
        ])}
        {...typeProps}
        {...attrs}
      >
        {loading && <Loader size={48} inline />}
        {valid && <Check validate absolute iconColor={color.white} />}
        <span>{children}</span>
        <style jsx>{style}</style>
      </Component>
    )
  }
}
