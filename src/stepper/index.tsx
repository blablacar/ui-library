import React, { PureComponent } from 'react'

import Button from 'button'
import PlusIcon from 'icon/plusIcon'
import MinusIcon from 'icon/minusIcon'

import { color, delay } from '_utils/branding'
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
  min: number,
  max: number,
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

  filterValue = (value:number, min:number, max:number) => {
    return Math.max(min, Math.min(value, max))
  }

  state:StepperState = {
    value: this.filterValue(this.props.value, this.props.min, this.props.max),
    min: this.props.min,
    max: this.props.max,
  }

  whileMouseDown:number
  mouseDownDelay:number

  componentDidUpdate(prevProps: StepperProps) {
    if (prevProps.max !== this.props.max ||
      prevProps.min !== this.props.min
    ) {
      this.update(this.state.value)
    }
  }

  update(newValue: number) {
    const value = this.filterValue(newValue, this.props.min, this.props.max)
    this.setState(
      { value },
    )
    this.props.onChange({ name: this.props.name, value })
  }

  handleMouseDown = (fn: () => void) => () => {
    this.mouseDownDelay = window.setTimeout(() => {
      this.whileMouseDown = window.setInterval(() => {
        fn()
        if (this.state.value >= this.props.max || this.state.value <= this.props.min) {
          this.clearMouseDownTimers()
        }
      }, parseInt(delay.interval.base, 10))
    }, parseInt(delay.timeout.base, 10))
  }

  clearMouseDownTimers = () => {
    clearTimeout(this.mouseDownDelay)
    clearInterval(this.whileMouseDown)
  }

  handleMouseUp = (fn: () => void) => () => {
    this.clearMouseDownTimers()
    fn()
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
          onMouseDown={this.handleMouseDown(this.decrement)}
          onMouseUp={this.handleMouseUp(this.decrement)}
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
          onMouseDown={this.handleMouseDown(this.increment)}
          onMouseUp={this.handleMouseUp(this.increment)}
        >
          <PlusIcon title={increaseLabel} iconColor={isMax ? color.disabled : color.primary} />
        </Button>
        <style jsx>{style}</style>
      </div>
    )
  }
}
