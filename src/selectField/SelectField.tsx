import React, { RefObject, useEffect, useState } from 'react'
import cc from 'classcat'

import { color } from '../_utils/branding'
import { A11yProps, CommonFieldsProps, pickA11yProps } from '../_utils/interfaces'
import { OnChangeParameters } from '../_utils/onChange'
import { ChevronIcon } from '../icon/chevronIcon'
import { StyledSelectField } from './SelectField.style'

export type SelectFieldItem = A11yProps &
  Readonly<{
    value: string | number
    label: string
  }>

export type SelectFieldProps = Partial<CommonFieldsProps> &
  A11yProps &
  Readonly<{
    options: SelectFieldItem[]
    defaultValue?: string
    onChange?: (obj: OnChangeParameters) => void
    onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void
    onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void
    focus?: boolean
    focusBorder?: boolean
    autoFocus?: boolean
    autoComplete?: string
  }>

export const SelectField = React.forwardRef(
  (props: SelectFieldProps, ref: RefObject<HTMLSelectElement>) => {
    const {
      name,
      className,
      defaultValue,
      options,
      onChange,
      onFocus = () => {},
      onBlur = () => {},
      disabled,
      required,
      focus,
      autoFocus,
      autoComplete,
      focusBorder = true,
    } = props
    const a11yAttrs = pickA11yProps<SelectFieldProps>(props)
    const baseClassName = 'kirk-selectField'
    const [hasFocus, setFocus] = useState(false)
    const [previousDefaultValue, setPreviousDefaultValue] = useState(defaultValue)
    const [currentValue, setCurrentValue] = useState(defaultValue)

    useEffect(() => {
      if (ref && !disabled && focus) {
        ref.current.focus()
      }
    }, [disabled, focus])

    useEffect(() => {
      if (defaultValue !== previousDefaultValue) {
        setPreviousDefaultValue(defaultValue)
        setCurrentValue(defaultValue)
      }
    }, [defaultValue])

    return (
      <StyledSelectField
        className={cc([
          baseClassName,
          className,
          hasFocus && focusBorder && `${baseClassName}--hasFocus`,
        ])}
      >
        <div className="kirk-selectField-background">
          <select
            name={name}
            onChange={event => {
              setCurrentValue(event.target.value)
              onChange({ name, value: event.target.value })
            }}
            onFocus={event => {
              setFocus(true)
              onFocus(event)
            }}
            onBlur={event => {
              setFocus(false)
              onBlur(event)
            }}
            defaultValue={defaultValue}
            value={currentValue}
            disabled={disabled}
            required={required}
            autoFocus={autoFocus}
            autoComplete={autoComplete}
            ref={ref}
            {...a11yAttrs}
          >
            {options.map(({ value, label, ...optionA11yAttrs }: SelectFieldItem) => (
              <option key={`${value}${label}`} value={value} {...optionA11yAttrs}>
                {label}
              </option>
            ))}
          </select>
          <ChevronIcon iconColor={color.lightMidnightGreen} down />
        </div>
      </StyledSelectField>
    )
  },
)
