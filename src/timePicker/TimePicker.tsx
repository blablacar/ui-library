import React, { PureComponent } from 'react'
import cc from 'classcat'

import { prefix } from '../_utils'
import { OnChangeParameters } from '../_utils/onChange'
import { StyledTimePicker, StyledTimePickerWrapper } from './TimePicker.style'

/**
 * Format given dateTime in the format HH:MM.
 */
const formatTimeValue = (dateTime: Date) => {
  const hours = dateTime.getHours()
  const minutes = dateTime.getMinutes()
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
}

/**
 * Returns a date with the time set to 00:00:00
 * e.g. input: Fri Jul 27 2018 10:03:29 GMT-0300 -> Fri Jul 27 2018 00:00:00 GMT-0300
 * @return date Date object
 *
 */
export const getTodayDate = () => {
  const date = new Date()
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  date.setMilliseconds(0)
  return date
}

export type TimePickerProps = Readonly<{
  name: string
  className?: string
  defaultValue?: string
  disabled?: boolean
  minuteStep?: number
  renderTime?: (dt: Date) => string
  onChange?: (obj: OnChangeParameters) => void
  timeStart?: string
  focus?: boolean
}>

type Steps = { [propName: string]: string }

type TimeSteps = {
  minuteStep?: number
  timeStart?: string
}

type TimePickerState = {
  value: string
  steps: Steps
  isFocused: boolean
}

export class TimePicker extends PureComponent<TimePickerProps, TimePickerState> {
  static defaultProps: Partial<TimePickerProps> = {
    renderTime: formatTimeValue,
  }

  /**
   * Returns a map of `{timeValue: timeLabel}` used to build the select options.
   * E.g. `{ '00:00': '12:00 AM', '08:00': '8:00 AM', '16:00': '4:00 PM' }`.
   */
  generateTimeSteps = ({ minuteStep = 30, timeStart = '00:00' }: TimeSteps) => {
    const steps: Steps = {}
    // Taking today as reference to loop through hours
    const dt = this.referenceDate
    const day = this.referenceDate.getDate()
    const { renderTime } = this.props
    while (dt.getDate() === day) {
      if (formatTimeValue(dt) >= timeStart) {
        steps[formatTimeValue(dt)] = renderTime(dt)
      }
      dt.setMinutes(dt.getMinutes() + minuteStep)
    }
    return steps
  }

  referenceDate = getTodayDate()

  state = {
    value: this.getDefaultValue(),
    steps: this.generateTimeSteps(this.props),
    isFocused: false,
  }

  selectRef = React.createRef<HTMLSelectElement>()

  static getDerivedStateFromProps(props: TimePickerProps, state: TimePickerState) {
    if (state.value < props.timeStart) {
      return {
        ...state,
        value: props.timeStart,
      }
    }
    return null
  }

  onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name } = this.props
    const { value } = e.target
    this.setState({ value })
    this.props.onChange({ name, value })
  }

  componentDidMount() {
    if (this.selectRef && this.props.focus) {
      this.selectRef.current.focus()
    }
  }

  componentDidUpdate(prevProps: TimePickerProps) {
    if (this.props.focus && this.props.focus !== prevProps.focus) {
      this.selectRef.current.focus()
    }
  }

  getDefaultValue() {
    if (!this.props.defaultValue) {
      return formatTimeValue(this.referenceDate)
    }
    return this.props.defaultValue
  }

  onSelectFocus = () => this.setState({ isFocused: true })

  onSelectBlur = () => this.setState({ isFocused: false })

  render() {
    const { className = '', disabled = false, name } = this.props
    const { steps } = this.state
    return (
      <StyledTimePickerWrapper
        className={cc([prefix({ timePicker: true }), { focus: this.state.isFocused }, className])}
      >
        <StyledTimePicker aria-disabled={disabled}>
          <time>{steps[this.state.value]}</time>
          <select
            name={name}
            value={this.state.value}
            disabled={disabled}
            onChange={this.onChange}
            onFocus={this.onSelectFocus}
            onBlur={this.onSelectBlur}
            ref={this.selectRef}
          >
            {Object.keys(steps).map(key => (
              <option key={key} value={key}>
                {steps[key]}
              </option>
            ))}
          </select>
        </StyledTimePicker>
      </StyledTimePickerWrapper>
    )
  }
}
