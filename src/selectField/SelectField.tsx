import React, { RefObject, useEffect, useState } from 'react'
import cc from 'classcat'

import { OnChangeParameters } from '../_internals/onChange'
import { color } from '../_utils/branding'
import { A11yProps, CommonFieldsProps, pickA11yProps } from '../_utils/interfaces'
import { ChevronIcon } from '../icon/chevronIcon'

export const selectHeight = '52px'

export interface SelectFieldItem extends A11yProps {
  readonly value: string | number
  readonly label: string
}

export interface SelectFieldProps extends Partial<CommonFieldsProps>, A11yProps {
  readonly options: SelectFieldItem[]
  readonly defaultValue?: string
  readonly onChange?: (obj: OnChangeParameters) => void
  readonly onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void
  readonly onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void
  readonly focus?: boolean
  readonly focusBorder?: boolean
  readonly autoFocus?: boolean
  readonly autoComplete?: string
}

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

    useEffect(() => {
      if (ref && !disabled && focus) {
        ref.current.focus()
      }
    }, [disabled, focus])

    return (
      <div
        className={cc([
          baseClassName,
          className,
          hasFocus && focusBorder && `${baseClassName}--hasFocus`,
        ])}
      >
        <select
          name={name}
          onChange={event => onChange({ name, value: event.target.value })}
          onFocus={event => {
            setFocus(true)
            onFocus(event)
          }}
          onBlur={event => {
            setFocus(false)
            onBlur(event)
          }}
          defaultValue={defaultValue}
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
    )
  },
)
