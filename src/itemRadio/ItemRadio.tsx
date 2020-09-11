import React, { Fragment } from 'react'
import cc from 'classcat'

import { ItemRadioCheckbox } from '../_internals/item/ItemRadioCheckbox.style'
import { OnChangeParameters } from '../_internals/onChange'
import { RadioIcon } from '../_internals/radioIcon'
import { useFocusVisible } from '../_utils/focusVisibleProvider/useFocusVisible'
import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { NormalizeProps } from '../layout/layoutNormalizer'
import { TextDisplayType } from '../text'

export enum ItemRadioStatus {
  DEFAULT = 'default',
  LOADING = 'loading',
}

export type ItemRadioProps = A11yProps &
  NormalizeProps &
  Readonly<{
    className?: string
    name: string
    value: string | number
    leftAddon?: React.ReactNode
    labelTitle?: string
    label: string
    data?: string
    dataInfo?: string
    checked?: boolean
    disabled?: boolean
    chevron?: boolean
    highlighted?: boolean
    onChange?: (obj: OnChangeParameters) => void
    onClick?: (obj: OnChangeParameters) => void
    status?: ItemRadioStatus
    key?: string | number
  }>

export const ItemRadio = (props: ItemRadioProps) => {
  const {
    label,
    name,
    value,
    data,
    className,
    labelTitle,
    dataInfo,
    checked,
    disabled,
    status,
    chevron,
    highlighted,
    leftAddon,
    hasHorizontalSpacing = false,
  } = props

  const a11yAttrs = pickA11yProps<ItemRadioProps>(props)
  const isLoading = status === ItemRadioStatus.LOADING
  const { focusVisible, onFocus, onBlur } = useFocusVisible()

  const radio = (
    <Fragment>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => {
          props.onChange({ name, value })
        }}
        onClick={() => {
          props.onClick({ name, value })
        }}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled || isLoading}
      />
      {(!chevron || isLoading) && (
        <RadioIcon isChecked={checked} isLoading={isLoading} isDisabled={disabled} />
      )}
    </Fragment>
  )

  return (
    <ItemRadioCheckbox
      className={cc(['kirk-item-radio', className, { 'focus-visible': focusVisible }])}
      leftTitle={labelTitle}
      leftBody={label}
      rightTitle={data}
      rightTitleDisplay={TextDisplayType.SUBHEADERSTRONG}
      rightBody={dataInfo}
      /* No a11y issue here
        - The input is well wrapped with the label
        - The linter can't access the complex components implementation
      */
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      tag={<label />}
      leftAddon={leftAddon}
      rightAddon={radio}
      chevron={chevron && !isLoading}
      highlighted={highlighted}
      isClickable={!disabled}
      disabled={disabled}
      hasHorizontalSpacing={hasHorizontalSpacing}
      {...a11yAttrs}
    />
  )
}
