import React, { Component, Fragment } from 'react'
import cc from 'classcat'

import { CheckboxIcon } from '../_internals/checkboxIcon'
import { Item } from '../_internals/item'
import { OnChangeParameters } from '../_internals/onChange'
import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { NormalizeProps } from '../layout/layoutNormalizer'
import { TextDisplayType } from '../text'

export enum ItemCheckboxStatus {
  DEFAULT = 'default',
  LOADING = 'loading',
}

export interface ItemCheckboxProps extends A11yProps, NormalizeProps {
  readonly className?: string
  readonly name: string
  readonly leftAddon?: React.ReactNode
  readonly labelTitle?: string
  readonly label: string
  readonly data?: string
  readonly dataInfo?: string
  readonly checked?: boolean
  readonly disabled?: boolean
  readonly onChange?: (obj: OnChangeParameters) => void
  readonly status?: ItemCheckboxStatus
  readonly key?: string | number
}

export class ItemCheckbox extends Component<ItemCheckboxProps> {
  static defaultProps: Partial<ItemCheckboxProps> = {
    onChange() {},
    checked: false,
  }

  onChange = () => {
    const { name, checked } = this.props
    this.props.onChange({ name, value: !checked })
  }

  render() {
    const {
      label,
      name,
      data,
      className,
      labelTitle,
      leftAddon,
      dataInfo,
      checked,
      disabled,
      status,
      hasHorizontalSpacing = false,
    } = this.props
    const a11yAttrs = pickA11yProps<ItemCheckboxProps>(this.props)
    const isLoading = status === ItemCheckboxStatus.LOADING
    const checkbox = (
      <Fragment>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={this.onChange}
          disabled={disabled || isLoading}
        />
        <CheckboxIcon isChecked={checked} isLoading={isLoading} isDisabled={disabled} />
      </Fragment>
    )

    return (
      <Item
        className={cc(['kirk-item-checkbox', className])}
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
}
