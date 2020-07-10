import React, { Component, Fragment } from 'react'
import cc from 'classcat'

import { Item } from '../_internals/item'
import { OnChangeParameters } from '../_internals/onChange'
import { RadioIcon } from '../_internals/radioIcon'
import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { NormalizeProps } from '../layout/layoutNormalizer'
import { TextDisplayType } from '../text'

export enum ItemRadioStatus {
  DEFAULT = 'default',
  LOADING = 'loading',
}

export interface ItemRadioProps extends A11yProps, NormalizeProps {
  readonly className?: string
  readonly name: string
  readonly value: string | number
  readonly leftAddon?: React.ReactNode
  readonly labelTitle?: string
  readonly label: string
  readonly data?: string
  readonly dataInfo?: string
  readonly checked?: boolean
  readonly disabled?: boolean
  readonly chevron?: boolean
  readonly highlighted?: boolean
  readonly onChange?: (obj: OnChangeParameters) => void
  readonly onClick?: (obj: OnChangeParameters) => void
  readonly status?: ItemRadioStatus
  readonly key?: string | number
}

interface ItemRadioState {
  readonly focus: boolean
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
      <Fragment>
        <Item
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
      </Fragment>
    )
  }
}
