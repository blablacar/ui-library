import React, { PureComponent } from 'react'
import padStart from 'lodash.padstart'
import cc from 'classcat'
import prefix from '_utils'
import style from './style'

/**
 * Whether or not Date#toLocaleTimeString supports arguments `locales` et `options`.
 */
const toLocaleTimeStringSupportsLocales = (() => {
  try {
    new Date().toLocaleTimeString('i')
  } catch (e) {
    return e.name === 'RangeError'
  }
  return false
})()

/**
 * Format given dateTime in the format HH:MM.
 */
const formatTimeValue = (dateTime: Date) => {
  const hours = dateTime.getUTCHours()
  const minutes = dateTime.getUTCMinutes()
  return `${padStart(hours.toString(), 2, '0')}:${padStart(minutes.toString(), 2, '0')}`
}

/**
 * Convert a date object to the equivalent date in UTC
 * Warning the timezone will be the one you're in
 * e.g. input: Wed Dec 31 1969 21:00:00 GMT-0300 -> Thu Jan 01 1970 00:00:00 GMT-0300
 * @param date Date object
 * @return date Date object
 *
 */
const convertDateToUTC = (date: Date) =>
  new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
  )

/**
 * Format given dateTime with `Date#toLocaleTimeString`.
 */
const defaultRenderTime = (dateTime: Date, locale: string) => {
  if (toLocaleTimeStringSupportsLocales && locale) {
    return convertDateToUTC(dateTime).toLocaleTimeString(locale, {
      hour: '2-digit',
      minute: '2-digit',
    })
  }
  return formatTimeValue(dateTime)
}

interface TimePickerProps {
  readonly name: string
  readonly className?: Classcat.Class
  readonly defaultValue?: string
  readonly disabled?: boolean
  readonly minuteStep?: number
  readonly renderTime?: (dt: Date, locale: string) => string
  readonly onChange?: (obj: onChangeParameters) => void
  readonly locale: string
  readonly timeStart?: string
}

type Steps = { [propName: string]: string }

type TimeSteps = {
  minuteStep?: number,
  locale: string,
  timeStart?: string,
}

interface TimePickerState {
  readonly value: string
  readonly steps: Steps
}

export default class TimePicker extends PureComponent<TimePickerProps, TimePickerState> {
  /**
   * Returns a map of `{timeValue: timeLabel}` used to build the select options.
   * E.g. `{ '00:00': '12:00 AM', '08:00': '8:00 AM', '16:00': '4:00 PM' }`.
   */
  generateTimeSteps = ({
    minuteStep = 30,
    locale,
    timeStart = '00:00',
  }: TimeSteps) => {
    const steps: Steps = {}
    // Taking unix time as reference to loop through hours
    const dt = new Date(0)
    dt.setUTCHours(0)
    dt.setUTCMinutes(0)
    const { renderTime = defaultRenderTime } = this.props
    while (dt.getUTCDate() === 1) {
      if (formatTimeValue(dt) >= timeStart) {
        steps[formatTimeValue(dt)] = renderTime(dt, locale)
      }
      dt.setUTCMinutes(dt.getUTCMinutes() + minuteStep)
    }
    return steps
  }

  state = {
    value: this.getDefaultValue(),
    steps: this.generateTimeSteps(this.props),
  }

  componentWillReceiveProps(newProps: TimePickerProps) {
    const shouldRegenerateTimeSteps =
      newProps.locale !== this.props.locale ||
      newProps.minuteStep !== this.props.minuteStep ||
      newProps.timeStart !== this.props.timeStart

    if (shouldRegenerateTimeSteps) {
      this.setState(state => ({
        value: state.value < newProps.timeStart ? newProps.timeStart : state.value,
        steps: this.generateTimeSteps(newProps),
      }))
    }
  }

  onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name } = this.props
    const { value } = e.target
    this.setState({ value })
    this.props.onChange({ name, value })
  }

  getDefaultValue() {
    if (!this.props.defaultValue) {
      const now = new Date()
      now.setMinutes(0)
      return formatTimeValue(now)
    }
    return this.props.defaultValue
  }

  render() {
    const { className = '', disabled = false, name } = this.props
    const { steps } = this.state
    return (
      <div className={cc([prefix({ timePicker: true }), className])} aria-disabled={disabled}>
        <time>{steps[this.state.value]}</time>
        <select name={name} value={this.state.value} disabled={disabled} onChange={this.onChange}>
          {Object.keys(steps).map(key => (
            <option key={key} value={key}>
              {steps[key]}
            </option>
          ))}
        </select>
        <style jsx>{style}</style>
      </div>
    )
  }
}
