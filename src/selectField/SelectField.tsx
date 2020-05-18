import React, { RefObject, useEffect, useState } from 'react'
import cc from 'classcat'

import { color } from '../_utils/branding'
import { CommonFieldsProps } from '../_utils/interfaces'
import { OnChangeParameters } from '../_utils/onChange'
import ChevronIcon from '../icon/chevronIcon'

export const selectHeight = '52px'

export interface SelectFieldItem {
  readonly value: string | number
  readonly label: string
  readonly ariaLabel?: string
}

export interface SelectFieldProps extends Partial<CommonFieldsProps> {
  readonly ariaLabel?: string
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

const SelectField = React.forwardRef(
  (
    {
      id,
      name,
      className,
      defaultValue,
      ariaLabel,
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
    }: SelectFieldProps,
    ref: RefObject<HTMLSelectElement>,
  ) => {
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
          id={id}
          name={name}
          aria-label={ariaLabel}
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
        >
          {options.map(({ value, label, ariaLabel: optionAriaLabel }: SelectFieldItem) => (
            <option key={`${value}${label}`} value={value} aria-label={optionAriaLabel}>
              {label}
            </option>
          ))}
        </select>
        <ChevronIcon iconColor={color.lightMidnightGreen} down />
      </div>
    )
  },
)

export default SelectField
