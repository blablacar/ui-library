import React, { Ref } from 'react'
import cc from 'classcat'
import { ChevronIcon } from 'icon'
import { color } from '_utils/branding'
import { CommonFieldsProps } from '_utils/interfaces'
import style from 'selectField/style'

interface SelectFieldProps extends CommonFieldsProps {
  readonly ariaLabel?: string
  readonly options: SelectFieldItem[]
  readonly onChange?: (obj: OnChangeParameters) => void
  readonly onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void
  readonly onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void
  readonly forwardedRef?: Ref<HTMLDivElement>
}

const SelectField = ({
  id,
  name,
  className,
  value,
  ariaLabel,
  options,
  onChange,
  onFocus,
  onBlur,
  autoFocus,
  disabled,
  required,
  forwardedRef,
}: SelectFieldProps) => {
  const baseClassName = 'kirk-selectField'

  return (
    <div className={cc([baseClassName, className])} ref={forwardedRef}>
      <select
        id={id}
        name={name}
        aria-label={ariaLabel}
        onChange={event => onChange({ name, value: event.target.value })}
        onFocus={onFocus}
        onBlur={onBlur}
        defaultValue={value}
        disabled={disabled}
        required={required}
        autoFocus={autoFocus}
      >
        {options.map(({ value, label, ariaLabel }: SelectFieldItem) => (
          <option key={value} value={value} aria-label={ariaLabel}>
            {label}
          </option>
        ))}
      </select>
      <ChevronIcon iconColor={color.icon} down />
      <style jsx global>
        {style}
      </style>
    </div>
  )
}

export default SelectField
