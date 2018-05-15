import React, { PureComponent } from 'react'
import cc from 'classcat'

import prefix from '_utils'
import { color } from '_utils/branding'
import style from 'textField/style'
import Button from 'button'
import CrossIcon from 'icon/crossIcon'
import EyeIcon from 'icon/eyeIcon'

export type textfield = HTMLInputElement | HTMLTextAreaElement

export interface CommonFormFields {
  name: string,
  id?: string,
  type?: 'text' | 'password' | 'email' | 'number' | 'search',
  placeholder?: string,
  maxLength?: number,
  autoCorrect?: 'on' | 'off',
  autoComplete?: 'on' | 'off',
  disabled?: boolean,
  readOnly?: boolean,
  autoFocus?: boolean,
  required?: boolean,
  onFocus?: (event:
    React.FocusEvent<HTMLTextAreaElement> | React.FocusEvent<HTMLInputElement>) => void,
  onBlur?: (event:
    React.FocusEvent<HTMLTextAreaElement> | React.FocusEvent<HTMLInputElement>) => void,
}

export interface TextFieldProps extends CommonFormFields {
  isTextArea?: boolean,
  defaultValue?: string,
  labelledBy?: string,
  onChange?: (obj:onChangeParameters) => void,
  onClear?: () => void,
  className?: Classcat.Class,
  error?: string | JSX.Element,
  addon?: JSX.Element,
  label?: string,
  buttonTitle?: string,
  focus?: boolean,
  inputRef?: (input: textfield) => void,
}

interface FormAttributes extends CommonFormFields {
  value: string,
  ['aria-invalid']?: 'true' | 'false',
  ['aria-labelledby']?: string,
  inputMode?: string,
  pattern?: string,
  ref?: (input: textfield) => void,
  onChange?: (event: React.ChangeEvent<textfield>) => void,
}

export interface TextFieldState {
  readonly value: string,
  readonly showPassword: boolean,
}

const DisplayError = (error: string | JSX.Element) => {
  const className = 'kirk-error-message'
  if (React.isValidElement(error)) {
    return React.cloneElement(error as React.ReactElement<any>, {
      className,
    })
  }
  return <span role="alert" className={className}>{error}</span>
}

export default class TextField extends PureComponent <TextFieldProps, TextFieldState> {
  private input:HTMLInputElement | HTMLTextAreaElement

  static defaultProps: Partial<TextFieldProps> = {
    inputRef() {},
    onClear() {},
    type: 'text',
  }

  state = {
    value: this.props.defaultValue,
    showPassword: false,
  }

  componentDidMount() {
    if (this.input && this.props.focus) {
      this.input.focus()
    }
  }

  componentWillReceiveProps({ defaultValue, focus }: TextFieldProps) {
    if (this.props.defaultValue !== defaultValue) {
      this.setState({ value: defaultValue })
    }
    if (focus && this.props.focus !== focus) {
      this.input.focus()
    }
  }

  onTextFieldChange = (event: React.ChangeEvent<textfield>) => {
    this.setState({ value: event.target.value }, this.onChange)
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

  clearValue = () => {
    this.setState({ value: '' }, () => {
      this.input.focus()
      this.onChange()
      this.props.onClear()
    })
  }

  toggleShowPassword = () => {
    this.setState(({ showPassword }) => {
      this.input.focus()
      return { showPassword: !showPassword }
    })
  }

  ref = (input:textfield) => {
    this.input = input
    this.props.inputRef(input)
  }

  render() {
    const {
      isTextArea, addon, type, placeholder, name, id, labelledBy, label, className,
      error, disabled, readOnly, onFocus, onBlur, autoFocus, required, maxLength,
      autoCorrect, autoComplete, buttonTitle,
    } = this.props
    const value = this.state.value || ''

    const attrs: FormAttributes = {
      type, placeholder, name, id, 'aria-labelledby': labelledBy,
      value, maxLength, autoComplete, autoCorrect,
      // modifiers
      disabled, readOnly, required, autoFocus,
      // actions
      onFocus, onBlur, onChange: this.onTextFieldChange, ref: this.ref,
    }

    if (error) {
      attrs['aria-invalid'] = 'true'
    }

    const iconProps = {
      iconColor: color.secondaryText,
      size: '18',
    }

    if (type === 'number') {
      // Display numeric keyboard on iOS
      attrs.pattern = '[0-9]*'
      attrs.inputMode = 'numeric'
    }

    const buttonOnClick = type !== 'password' ?
      this.clearValue :
      this.toggleShowPassword

    const shouldDisplayErrorMessage = error && typeof error !== 'boolean'

    return (
      <div className={cc(['kirk-textField', prefix({ error: !!error, disabled }), className])}>
        { label &&
          <label htmlFor={id}>{label}</label>
        }
        <div className="kirk-textField-wrapper">
          { addon }
          { isTextArea ?
            <textarea {...attrs} /> :
            <input
              {...attrs}
              type={type === 'password' && this.state.showPassword ? 'text' : type}
            />
          }
          {
            !isTextArea &&
            <Button
              className="kirk-textField-button"
              hidden={!value}
              status={Button.STATUS.UNSTYLED}
              icon
              onClick={buttonOnClick}
              tabIndex="-1"
              title={buttonTitle}
            >
              {
                type === 'password'
                  ? <EyeIcon {...iconProps} off={this.state.showPassword} />
                  : <CrossIcon {...iconProps} />
              }
            </Button>
          }
        </div>
        {shouldDisplayErrorMessage && DisplayError(error)}
        <style jsx>{style}</style>
      </div>
    )
  }
}
