import React, { Component, Fragment } from 'react'
import cc from 'classcat'

import { CheckboxIcon } from '../_internals/checkboxIcon'
import { OnChangeParameters } from '../_internals/onChange'
import { FocusVisibleContext } from '../_utils/focusVisibleProvider'
import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { NormalizeProps } from '../layout/layoutNormalizer'
import { TextDisplayType } from '../text'
import { StyledItemCheckbox } from './ItemCheckbox.style'

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
    label: string
    data?: string
    dataInfo?: string
    checked?: boolean
    disabled?: boolean
    onChange?: (obj: OnChangeParameters) => void
    status?: ItemCheckboxStatus
    key?: string | number
  }>

type ItemCheckboxState = {
  focus: boolean
}

export class ItemCheckbox extends Component<ItemCheckboxProps> {
  static defaultProps: Partial<ItemCheckboxProps> = {
    onChange() {},
    checked: false,
  }

  state: ItemCheckboxState = {
    focus: false,
  }

  onChange = () => {
    const { name, checked } = this.props
    this.props.onChange({ name, value: !checked })
  }

  onFocus = () => {
    this.setState({ focus: true })
  }

  onBlur = () => {
    this.setState({ focus: false })
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
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          disabled={disabled || isLoading}
        />
        <CheckboxIcon isChecked={checked} isLoading={isLoading} isDisabled={disabled} />
      </Fragment>
    )

    return (
      <FocusVisibleContext.Consumer>
        {context => (
          <StyledItemCheckbox
            className={cc([
              'kirk-item-checkbox',
              {
                'focus-visible': context && this.state.focus,
              },
              className,
            ])}
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
            disabled={disabled}
            hasHorizontalSpacing={hasHorizontalSpacing}
            {...a11yAttrs}
          />
        )}
      </FocusVisibleContext.Consumer>
    )
  }
}
