import React, { PureComponent } from 'react'
import cc from 'classcat'

import Loader from 'loader'
import Item, { ItemProps } from '_utils/item/index'
import CircleIcon from 'icon/circleIcon'
import CheckIcon from 'icon/checkIcon'

import { color } from '_utils/branding'

import style from 'toggleButton/style'

interface ToggleButtonProps extends ItemProps {
  readonly name: string,
  readonly label: string,
  readonly sublabel?: string,
  readonly status?: ToggleButtonStatus,
  readonly checked?: boolean,
  readonly disabled?: boolean,
  readonly onChange?: (obj:onChangeParameters) => void,
}

interface ToggleButtonState {
  readonly checked: boolean,
}

export enum ToggleButtonStatus {
  DEFAULT = 'default',
  LOADING = 'loading',
}

export default class ToggleButton extends PureComponent<ToggleButtonProps> {
  static defaultProps:Partial<ToggleButtonProps> = {
    status: ToggleButtonStatus.DEFAULT,
    checked: false,
    disabled: false,
  }

  static STATUS = ToggleButtonStatus

  state:ToggleButtonState = {
    checked: this.props.checked,
  }

  onButtonClick = () => {
    const checked = !this.state.checked
    this.props.onChange({ name: this.props.name, value: checked })
    this.setState({ checked })
  }

  render() {
    const isLoading = this.props.status === ToggleButtonStatus.LOADING
    const isChecked = this.state.checked
    const isDisabled = this.props.disabled || isLoading

    let rightAddon = <CircleIcon iconColor={color.primary} />
    if (isChecked) {
      rightAddon = <CheckIcon iconColor={color.white} backgroundColor={color.primary}  />
    }
    if (isLoading) {
      rightAddon = <Loader size={24} inline />
    }

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
          rightAddon={rightAddon}
        />
        <style jsx>{style}</style>
      </button>
    )
  }
}
