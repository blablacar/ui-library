import React, { Fragment } from 'react'
import cc from 'classcat'

import { CheckboxIcon } from '../_internals/checkboxIcon'
import { ItemRadioCheckbox } from '../_internals/item/ItemRadioCheckbox.style'
import { useFocusVisible } from '../_utils/focusVisibleProvider/useFocusVisible'
import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { OnChangeParameters } from '../_utils/onChange'
import { NormalizeProps } from '../layout/layoutNormalizer'
import { TextDisplayType } from '../text'

export enum ItemCheckboxStatus {
  DEFAULT = 'default',
  LOADING = 'loading',
}

export type ItemCheckboxProps = NormalizeProps &
  A11yProps &
  Readonly<{
    className?: string
    name: string
    leftAddon?: React.ReactNode
    labelTitle?: string
    label?: string
    data?: string
    dataInfo?: string
    checked?: boolean
    disabled?: boolean
    onChange?: (obj: OnChangeParameters) => void
    status?: ItemCheckboxStatus
    key?: string | number
  }>

export const ItemCheckbox = (props: ItemCheckboxProps) => {
  const {
    label,
    name,
    data,
    className,
    labelTitle,
    leftAddon,
    dataInfo,
    checked = false,
    disabled,
    status,
    hasHorizontalSpacing = false,
  } = props
  const a11yAttrs = pickA11yProps<ItemCheckboxProps>(props)
  const isLoading = status === ItemCheckboxStatus.LOADING
  const { focusVisible, onFocus, onBlur } = useFocusVisible()

  const checkbox = (
    <Fragment>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={() => {
          props.onChange({ name, value: !checked })
        }}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled || isLoading}
      />
      <CheckboxIcon isChecked={checked} isLoading={isLoading} isDisabled={disabled} />
    </Fragment>
  )

  return (
    <ItemRadioCheckbox
      className={cc(['kirk-item-checkbox', className, { 'focus-visible': focusVisible }])}
      leftTitle={labelTitle}
      leftBody={label}
      leftAddon={leftAddon}
      rightTitle={data}
      rightTitleDisplay={TextDisplayType.SUBHEADERSTRONG}
      rightBody={dataInfo}
      /* No a11y issue here
        - The input is well wrapped with the label
        - The linter can't access the complex components implementation
      */
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      tag={<label />}
      rightAddon={checkbox}
      isClickable={!disabled}
      disabled={disabled}
      hasHorizontalSpacing={hasHorizontalSpacing}
      {...a11yAttrs}
    />
  )
}
