import React, { PureComponent } from 'react'
import cc from 'classcat'

import Item from '_utils/item/index'
import { ItemProps } from '_utils/item/Item'
import CheckboxIcon from '_utils/checkboxIcon'

export interface ToggleButtonProps extends ItemProps {
  readonly name: string
  readonly label: string
  readonly sublabel?: string
  readonly status?: ToggleButtonStatus
  readonly checked?: boolean
  readonly disabled?: boolean
  readonly onChange?: (obj: OnChangeParameters) => void
}

interface ToggleButtonState {
  readonly checked: boolean
}

export enum ToggleButtonStatus {
  DEFAULT = 'default',
  LOADING = 'loading',
}

export default class ToggleButton extends PureComponent<ToggleButtonProps> {
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
      <button
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
      </button>
    )
  }
}
