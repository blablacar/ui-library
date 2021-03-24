/* TODO: BBC-7420 fix a11y issues */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { PureComponent, RefObject } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { prefix } from '../_utils'
import { OnChangeParameters } from '../_utils/onChange'
import { Button, ButtonStatus } from '../button'
import { StyledTextarea } from './Textarea.style'

export type CommonFormFields = Readonly<{
  name: string
  id?: string
  placeholder?: string
  maxLength?: number
  autoCorrect?: 'on' | 'off'
  autoComplete?: 'on' | 'off'
  disabled?: boolean
  readOnly?: boolean
  autoFocus?: boolean
  required?: boolean
  title?: string
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void
}>

type errorField = string | JSX.Element

export type TextareaProps = CommonFormFields &
  Readonly<{
    defaultValue?: string
    labelledBy?: string
    onChange?: (obj: OnChangeParameters) => void
    className?: string
    errorClassName?: string
    error?: errorField
    label?: string
    focus?: boolean
    pattern?: string
    fieldRef?: (textarea: HTMLTextAreaElement) => void
    focusBorder?: boolean
    fitContent?: boolean // Allow the textarea to grow/shrink with its content.
    // To display the buttom, you need to specify onButtonClick, buttonIcon and buttonTitle.
    onButtonClick?: (event: React.MouseEvent<HTMLElement>) => void
    buttonIcon?: JSX.Element
    buttonTitle?: string
  }>

type TextAreaAttributes = CommonFormFields & {
  className?: string
  value: string
  ['aria-invalid']?: 'true' | 'false'
  ['aria-labelledby']?: string
  ref?: (textarea: HTMLTextAreaElement) => void
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export type TextAreaState = {
  value: string
  defaultValue: string
  hasFocus: boolean
}

export class Textarea extends PureComponent<TextareaProps, TextAreaState> {
  static defaultProps: Partial<TextareaProps> = {
    fieldRef() {},
    onFocus() {},
    onBlur() {},
    focusBorder: true,
  }

  state = {
    value: this.props.defaultValue,
    defaultValue: this.props.defaultValue,
    hasFocus: false,
  }

  buttonRef: HTMLButtonElement = null
  textareaRef: RefObject<HTMLTextAreaElement> = React.createRef()

  componentDidMount() {
    if (this.textareaRef && this.textareaRef.current && this.props.focus) {
      this.textareaRef.current.focus()
    }
  }

  static getDerivedStateFromProps(props: TextareaProps, state: TextAreaState) {
    if (props.defaultValue !== state.defaultValue) {
      return {
        ...state,
        value: props.defaultValue,
        defaultValue: props.defaultValue,
      }
    }
    return null
  }

  componentDidUpdate(prevProps: TextareaProps) {
    if (
      this.props.focus &&
      this.props.focus !== prevProps.focus &&
      this.textareaRef &&
      this.textareaRef.current
    ) {
      this.textareaRef.current.focus()
    }

    this.maybeAdaptHeightToContent()
  }

  // To ensure a proper scrolling behavior for the textarea when growing with content, we need to
  // have a wrapper independent from the native textarea. This wrapper is bigger that the
  // the textarea but still looks like the textarea (same background color). When activating the
  // wrapper, the focus should set the focus on the native textarea.
  onWrapperClick = () => {
    if (this.textareaRef && this.textareaRef.current) {
      this.textareaRef.current.focus()
    }
  }

  onFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    this.setState({
      hasFocus: true,
    })
    this.props.onFocus(event)
  }

  onBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    if (!event.relatedTarget || event.relatedTarget !== this.buttonRef) {
      this.setState({
        hasFocus: false,
      })
      this.props.onBlur(event)
    }
  }

  onTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState(
      {
        value: event.target.value,
      },
      this.onChange,
    )
  }

  maybeAdaptHeightToContent = () => {
    if (!this.props.fitContent) {
      return
    }

    // Fit height to content.
    if (this.textareaRef && this.textareaRef.current) {
      this.textareaRef.current.style.height = '0'
      this.textareaRef.current.style.height = `${this.textareaRef.current.scrollHeight}px`
    }
  }

  onChange = () => {
    this.props.onChange({
      name: this.props.name,
      value: this.state.value,
    })

    this.maybeAdaptHeightToContent()
  }

  ref = (textarea: HTMLTextAreaElement) => {
    this.props.fieldRef(textarea)
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
      className,
      placeholder,
      name,
      id,
      labelledBy,
      label,
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
      focusBorder,
      buttonIcon,
      onButtonClick,
      fitContent,
    } = this.props
    const value = this.state.value || ''

    const attributes: TextAreaAttributes = {
      placeholder,
      className: '',
      name,
      id,
      'aria-labelledby': labelledBy,
      value,
      maxLength,
      autoComplete,
      autoCorrect,
      title,
      // modifiers
      disabled,
      readOnly,
      required,
      autoFocus,
      // actions
      onFocus,
      onBlur,
      onChange: this.onTextAreaChange,
      ref: this.ref,
    }

    if (error) {
      attributes['aria-invalid'] = 'true'
    }

    const textareaFieldClassNames = ['kirk-textarea-element']
    const shouldDisplayButton = buttonIcon && onButtonClick && !isEmpty(buttonTitle)
    if (shouldDisplayButton) {
      textareaFieldClassNames.push('kirk-textarea-hasButton')
    }
    if (fitContent) {
      textareaFieldClassNames.push('kirk-textarea-fitContent')
    }
    attributes.className = cc(textareaFieldClassNames)

    return (
      <StyledTextarea
        className={cc(['kirk-textarea', prefix({ error: !!error, disabled }), className])}
      >
        {label && <label htmlFor={id}>{label}</label>}
        <div
          onClick={this.onWrapperClick}
          className={cc([
            'kirk-textarea-wrapper',
            {
              'kirk-textarea-wrapper--hasFocus': focusBorder && this.state.hasFocus,
            },
          ])}
        >
          <textarea
            {...attributes}
            ref={this.textareaRef}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
          {shouldDisplayButton && (
            <Button
              className="kirk-textarea-button"
              status={ButtonStatus.UNSTYLED}
              isBubble
              onClick={onButtonClick}
              tabIndex={0}
              title={buttonTitle}
              buttonRef={(elem: HTMLButtonElement) => {
                this.buttonRef = elem
              }}
            >
              {buttonIcon}
            </Button>
          )}
        </div>
        {Boolean(error) && this.renderError()}
      </StyledTextarea>
    )
  }
}
