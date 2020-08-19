import React, { Component, Fragment } from 'react'
import cc from 'classcat'

import { OnChangeParameters } from '../_internals/onChange'
import { RadioIcon } from '../_internals/radioIcon'
import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { NormalizeProps } from '../layout/layoutNormalizer'
import { TextDisplayType } from '../text'
import { StyledItemRadio } from './ItemRadio.style'

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

type ItemRadioState = {
  focus: boolean
}

export class ItemRadio extends Component<ItemRadioProps> {
  static defaultProps: Partial<ItemRadioProps> = {
    onChange() {},
    onClick() {},
    checked: false,
  }

  state: ItemRadioState = {
    focus: false,
  }

  onChange = () => {
    const { name, value } = this.props
    this.props.onChange({ name, value })
  }

  onClick = () => {
    const { name, value } = this.props
    this.props.onClick({ name, value })
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
    } = this.props
    const a11yAttrs = pickA11yProps<ItemRadioProps>(this.props)
    const isLoading = status === ItemRadioStatus.LOADING
    const radio = (
      <Fragment>
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={this.onChange}
          onClick={this.onClick}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          disabled={disabled || isLoading}
        />
        {(!chevron || isLoading) && (
          <RadioIcon isChecked={checked} isLoading={isLoading} isDisabled={disabled} />
        )}
      </Fragment>
    )

    return (
      <StyledItemRadio
        className={cc(['kirk-item-radio', className, { focus: this.state.focus }])}
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
}
