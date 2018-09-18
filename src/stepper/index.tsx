import React, { PureComponent } from 'react'

import Button from 'button'
import PlusIcon from 'icon/plusIcon'
import MinusIcon from 'icon/minusIcon'

import { color } from '_utils/branding'
import style from 'stepper/style'

interface StepperProps {
  name: string,
  children: string,
  increaseLabel: string,
  decreaseLabel: string,
  value?: number,
  step?: number,
  max?: number,
  min?: number,
  format?: (value: string | number) => string | number,
  onChange?: (obj:onChangeParameters) => void,
}

interface StepperState {
  value: number,
}

// Support IE. Same value returned with Number.MAX_SAFE_INTEGER / Number.MIN_SAFE_INTEGER
const defaultInteger = (2 ** 53) - 1

export default class Stepper extends PureComponent <StepperProps, StepperState> {
  static defaultProps: Partial<StepperProps> = {
    value: 0,
    step: 1,
    max: defaultInteger,
    min: -defaultInteger,
    format: value => value,
    onChange: () => {},
  }

  state:StepperState = {
    value: this.props.value,
  }

  componentDidMount() {
    this.update(this.state.value, undefined, false)
  }

  componentWillReceiveProps(nextProps: StepperProps) {
    if (
      nextProps.value !== this.state.value ||
      nextProps.value <= this.props.max ||
      nextProps.value >= this.props.min
    ) {
      this.update(nextProps.value, nextProps)
    }
  }

  update(newValue: number, { min, max } = this.props, triggerOnChange: boolean = true) {
    const value = Math.max(min, Math.min(newValue, max))
    this.setState({ value })
    if (triggerOnChange) {
      this.props.onChange({ name: this.props.name, value })
    }
  }

  increment = () => {
    this.update(this.state.value + this.props.step)
  }

  decrement = () => {
    this.update(this.state.value - this.props.step)
  }

  render() {
    const { children, increaseLabel, decreaseLabel, format, name, min, max } = this.props
    const isMax = this.state.value >= max
    const isMin = this.state.value <= min

    return (
      <div className="kirk-stepper">
        <Button
          type="button"
          className="kirk-stepper-decrement"
          status={Button.STATUS.UNSTYLED}
          disabled={isMin}
          onClick={this.decrement}
        >
          <MinusIcon title={decreaseLabel} iconColor={isMin ? color.disabled : color.primary} />
        </Button>
        <div className="kirk-stepper-value">
          { format(this.state.value) }
        </div>
        <label>
          <span>{children}</span>
          <input type="hidden" name={name} value={format(this.state.value)} readOnly />
        </label>
        <Button
          type="button"
          className="kirk-stepper-increment"
          status={Button.STATUS.UNSTYLED}
          disabled={isMax}
          onClick={this.increment}
        >
          <PlusIcon title={increaseLabel} iconColor={isMax ? color.disabled : color.primary} />
        </Button>
        <style jsx>{style}</style>
      </div>
    )
  }
}
