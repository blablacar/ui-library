import React, { InputHTMLAttributes, PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { prefix } from '../_utils'
import { color } from '../_utils/branding'
import { OnChangeParameters } from '../_utils/onChange'
import { Button, ButtonStatus } from '../button'
import { CrossIcon } from '../icon/crossIcon'
import { EyeIcon } from '../icon/eyeIcon'
import { StyledTextField } from './TextField.style'

export type textfield = HTMLInputElement | HTMLTextAreaElement

export enum inputTypes {
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email',
  NUMBER = 'number',
  SEARCH = 'search',
  TEL = 'tel',
}

export enum inputModes {
  NONE = 'none',
  TEXT = 'text',
  DECIMAL = 'decimal',
  NUMERIC = 'numeric',
  TEL = 'tel',
  SEARCH = 'search',
  EMAIL = 'email',
  URL = 'url',
}

export type CommonFormFields = Readonly<{
  name: string
  id?: string
  type?: inputTypes
  placeholder?: string
  maxLength?: number
  autoCorrect?: 'on' | 'off'
  autoComplete?: string
  spellCheck?: 'true' | 'false'
  disabled?: boolean
  readOnly?: boolean
  autoFocus?: boolean
  required?: boolean
  title?: string
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
}>

type errorField = string | JSX.Element

export type TextFieldProps = CommonFormFields &
  Readonly<{
    defaultValue?: string
    labelledBy?: string
    onChange?: (obj: OnChangeParameters) => void
    onClear?: () => void
    className?: string
    errorClassName?: string
    error?: errorField
    addon?: JSX.Element
    label?: string
    buttonTitle?: string
    focus?: boolean
    inputMode?: inputModes
    pattern?: string
    inputRef?: (input: textfield) => void
    format?: (value: string, previousValue: string) => string
    focusBorder?: boolean
    loader?: JSX.Element
    inputAttributes: InputHTMLAttributes<HTMLInputElement>
  }>

export type TextFieldState = {
  value: string
  previousValue: string
  defaultValue: string
  showPassword: boolean
  hasFocus: boolean
}

export class TextField extends PureComponent<TextFieldProps, TextFieldState> {
  private input: HTMLInputElement | HTMLTextAreaElement
  static defaultProps: Partial<TextFieldProps> = {
    inputRef() {},
    onClear() {},
    onFocus() {},
    onBlur() {},
    type: inputTypes.TEXT,
    format: value => value,
    focusBorder: true,
  }

  static INPUT_TYPES = inputTypes
  static INPUT_MODES = inputModes

  state = {
    value: this.props.defaultValue,
    defaultValue: this.props.defaultValue,
    previousValue: '',
    showPassword: false,
    hasFocus: false,
  }

  clearButton: HTMLButtonElement = null

  componentDidMount() {
    if (this.input && this.props.focus) {
      this.input.focus()
    }
  }

  static getDerivedStateFromProps(props: TextFieldProps, state: TextFieldState) {
    if (props.defaultValue !== state.defaultValue) {
      return {
        ...state,
        value: props.defaultValue,
        defaultValue: props.defaultValue,
        previousValue: state.value,
      }
    }
    return null
  }

  componentDidUpdate(prevProps: TextFieldProps) {
    if (this.props.focus && this.props.focus !== prevProps.focus) {
      this.input.focus()
    }
  }

  onTextFieldChange = (event: React.ChangeEvent<textfield>) => {
    const { value } = this.state
    this.setState(
      {
        value: this.props.format(event.target.value, value),
        previousValue: value,
      },
      this.onChange,
    )

    if (event.currentTarget.value === '') {
      this.props.onClear()
    }
  }

  onChange = () => {
    this.props.onChange({
      name: this.props.name,
      value: this.state.value,
    })
  }

  onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    this.setState({
      hasFocus: true,
    })
    this.props.onFocus(event)
  }

  onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!event.relatedTarget || event.relatedTarget !== this.clearButton) {
      this.setState({
        hasFocus: false,
      })
      this.props.onBlur(event)
    }
  }

  clearValue = () => {
    const { value } = this.state
    this.setState(
      {
        value: '',
        previousValue: value,
      },
      () => {
        this.input.focus()
        this.onChange()
        this.props.onClear()
      },
    )
  }

  toggleShowPassword = () => {
    this.setState(({ showPassword }) => {
      this.input.focus()
      return { showPassword: !showPassword }
    })
  }

  ref = (input: textfield) => {
    this.input = input
    this.props.inputRef(input)
  }

  renderError = () => {
    const { error, errorClassName } = this.props
    const className = cc(['kirk-error-message', errorClassName])

    return React.isValidElement(error) ? (
      React.cloneElement(error, { className } as Object)
    ) : (
      <span role="alert" className={className}>
        {error}
      </span>
    )
  }

  render() {
    const {
      addon,
      type,
      placeholder,
      name,
      id,
      labelledBy,
      label,
      className,
      error,
      disabled,
      readOnly,
      onFocus,
      onBlur,
      autoFocus,
      required,
      maxLength,
      autoCorrect,
      autoComplete,
      title,
      buttonTitle,
      format,
      inputMode,
      pattern,
      focusBorder,
      loader,
      inputAttributes,
    } = this.props
    const value = this.state.value ? format(this.state.value, this.state.previousValue) : ''

    const attrs: InputHTMLAttributes<HTMLInputElement> & {
      ref: any
    } = {
      ...inputAttributes,
      type,
      placeholder,
      name,
      id,
      'aria-labelledby': labelledBy,
      value,
      maxLength,
      autoComplete,
      autoCorrect,
      title,
      inputMode,
      pattern,
      // modifiers
      disabled,
      readOnly,
      required,
      autoFocus,
      // actions
      onFocus,
      onBlur,
      onChange: this.onTextFieldChange,
      ref: this.ref,
    }

    if (error) {
      attrs['aria-invalid'] = 'true'
    }

    const iconProps = {
      iconColor: color.lightMidnightGreen,
      size: '18',
    }

    if (type === inputTypes.NUMBER) {
      // Display numeric keyboard on iOS
      attrs.pattern = '[0-9]*'
      attrs.inputMode = inputModes.NUMERIC
    }

    const buttonOnClick = type !== inputTypes.PASSWORD ? this.clearValue : this.toggleShowPassword
    const shouldDisplayButton = !disabled && value

    return (
      <StyledTextField
        className={cc(['kirk-textField', prefix({ error: !!error, disabled }), className])}
      >
        {label && <label htmlFor={id}>{label}</label>}
        <div
          className={cc([
            'kirk-textField-wrapper',
            {
              'kirk-textField-wrapper--hasFocus': focusBorder && this.state.hasFocus,
            },
          ])}
        >
          {addon}
          <input
            {...attrs}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            type={type === inputTypes.PASSWORD && this.state.showPassword ? inputTypes.TEXT : type}
          />
          {loader}
          {!loader && shouldDisplayButton && (
            <Button
              className="kirk-textField-button"
              status={ButtonStatus.UNSTYLED}
              isBubble
              onClick={buttonOnClick}
              tabIndex={-1}
              title={buttonTitle}
              aria-hidden={isEmpty(buttonTitle)}
              buttonRef={(elem: HTMLButtonElement) => {
                this.clearButton = elem
              }}
            >
              {type === 'password' ? (
                <EyeIcon {...iconProps} off={this.state.showPassword} />
              ) : (
                <CrossIcon {...iconProps} />
              )}
            </Button>
          )}
        </div>
        {Boolean(error) && this.renderError()}
      </StyledTextField>
    )
  }
}
