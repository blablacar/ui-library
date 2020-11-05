import React, { PureComponent } from 'react'
import cc from 'classcat'

import { CheckboxIcon } from '../_internals/checkboxIcon'
import { Item } from '../_internals/item/index'
import { ItemProps } from '../_internals/item/Item'
import { OnChangeParameters } from '../_internals/onChange'
import { StyledToggleButton } from './ToggleButton.style'

export type ToggleButtonProps = ItemProps &
  Readonly<{
    name: string
    label: string
    sublabel?: string
    status?: ToggleButtonStatus
    checked?: boolean
    disabled?: boolean
    onChange?: (obj: OnChangeParameters) => void
  }>

type ToggleButtonState = {
  checked: boolean
}

export enum ToggleButtonStatus {
  DEFAULT = 'default',
  LOADING = 'loading',
}

export class ToggleButton extends PureComponent<ToggleButtonProps> {
  static defaultProps: Partial<ToggleButtonProps> = {
    status: ToggleButtonStatus.DEFAULT,
    checked: false,
    disabled: false,
  }

  state: ToggleButtonState = {
    checked: this.props.checked,
  }

  onButtonClick = () => {
    const { checked } = this.state
    this.props.onChange({ name: this.props.name, value: !checked })
    this.setState({ checked: !checked })
  }

  render() {
    const isLoading = this.props.status === ToggleButtonStatus.LOADING
    const isChecked = this.state.checked
    const isDisabled = this.props.disabled || isLoading

    return (
      <StyledToggleButton
        className={cc(['kirk-toggle-button', this.props.className])}
        type="button"
        aria-pressed={isChecked}
        onClick={this.onButtonClick}
        disabled={isDisabled}
      >
        <Item
          leftTitle={this.props.label}
          leftBody={this.props.sublabel}
          rightAddon={<CheckboxIcon isChecked={isChecked} isLoading={isLoading} />}
        />
      </StyledToggleButton>
    )
  }
}
