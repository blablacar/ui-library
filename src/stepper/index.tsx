import React, { PureComponent } from 'react'
import { canUseDOM } from 'exenv'
import cc from 'classcat'
import { isTouchEventsAvailable } from '_utils'

import Button, { ButtonStatus } from 'button'
import PlusIcon from 'icon/plusIcon'
import MinusIcon from 'icon/minusIcon'

import { color, delay } from '_utils/branding'
import style from 'stepper/style'

interface StepperProps {
  name: string
  children: string
  increaseLabel: string
  decreaseLabel: string
  className?: string
  buttonSize?: number
  valueClassName?: string
  value?: number
  step?: number
  max?: number
  min?: number
  format?: (value: string | number) => string | number
  onChange?: (obj: OnChangeParameters) => void
}

interface StepperState {
  value: number
  min: number
  max: number
}

// Support IE. Same value returned with Number.MAX_SAFE_INTEGER / Number.MIN_SAFE_INTEGER
const defaultInteger = 2 ** 53 - 1
const isTouchScreen = isTouchEventsAvailable()

export default class Stepper extends PureComponent<StepperProps, StepperState> {
  static defaultProps: Partial<StepperProps> = {
    value: 0,
    step: 1,
    max: defaultInteger,
    min: -defaultInteger,
    format: value => value,
    onChange: () => {},
  }

  filterValue = (value: number, min: number, max: number) => {
    return Math.max(min, Math.min(value, max))
  }

  state: StepperState = {
    value: this.filterValue(this.props.value, this.props.min, this.props.max),
    min: this.props.min,
    max: this.props.max,
  }

  whileButtonDown: number
  buttonDownDelay: number

  componentDidUpdate(prevProps: StepperProps) {
    if (prevProps.max !== this.props.max || prevProps.min !== this.props.min) {
      this.update(this.state.value)
    }
  }

  update(newValue: number) {
    const value = this.filterValue(newValue, this.props.min, this.props.max)
    this.setState({ value })
    this.props.onChange({ name: this.props.name, value })
  }

  handleButtonDown = (callback: () => void) => () => {
    if (canUseDOM) {
      this.buttonDownDelay = window.setTimeout(() => {
        this.whileButtonDown = window.setInterval(() => {
          callback()
          if (this.state.value >= this.props.max || this.state.value <= this.props.min) {
            this.clearButtonPressedTimers()
          }
        }, parseInt(delay.interval.base, 10))
      }, parseInt(delay.timeout.base, 10))
    }
  }

  clearButtonPressedTimers = () => {
    clearTimeout(this.buttonDownDelay)
    clearInterval(this.whileButtonDown)
  }

  handleButtonUp = (callback: () => void) => () => {
    callback()
    this.clearButtonPressedTimers()
  }

  increment = () => {
    this.update(this.state.value + this.props.step)
  }

  decrement = () => {
    this.update(this.state.value - this.props.step)
  }

  createListeners(callback: () => void) {
    return isTouchScreen
      ? { onTouchStart: this.handleButtonDown(callback), onTouchEnd: this.handleButtonUp(callback) }
      : { onMouseDown: this.handleButtonDown(callback), onMouseUp: this.handleButtonUp(callback) }
  }

  render() {
    const {
      className,
      children,
      increaseLabel,
      decreaseLabel,
      format,
      name,
      min,
      max,
      valueClassName,
      buttonSize,
    } = this.props
    const isMax = this.state.value >= max
    const isMin = this.state.value <= min

    return (
      <div className={cc(['kirk-stepper', className])}>
        <Button
          type="button"
          className="kirk-stepper-decrement"
          status={ButtonStatus.UNSTYLED}
          disabled={isMin}
          {...this.createListeners(this.decrement)}
        >
          <MinusIcon
            title={decreaseLabel}
            iconColor={isMin ? color.disabled : color.primary}
            size={buttonSize}
          />
        </Button>
        <div className={cc(['kirk-stepper-value', valueClassName])}>{format(this.state.value)}</div>
        <label>
          <span>{children}</span>
          <input type="hidden" name={name} value={format(this.state.value)} readOnly />
        </label>
        <Button
          type="button"
          className="kirk-stepper-increment"
          status={ButtonStatus.UNSTYLED}
          disabled={isMax}
          {...this.createListeners(this.increment)}
        >
          <PlusIcon
            title={increaseLabel}
            iconColor={isMax ? color.disabled : color.primary}
            size={buttonSize}
          />
        </Button>
        <style jsx>{style}</style>
      </div>
    )
  }
}
