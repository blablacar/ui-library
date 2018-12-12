import React, { Component } from 'react'
import cc from 'classcat'
import moment from 'moment'
import 'react-dates/initialize'
import { DayPickerSingleDateController, isInclusivelyAfterDay } from 'react-dates'
import {
  HORIZONTAL_ORIENTATION,
  VERTICAL_ORIENTATION,
  VERTICAL_SCROLLABLE,
} from 'react-dates/constants'

import { color } from '_utils/branding'
import ArrowIcon from 'icon/arrowIcon'
import style from './style'
import theme from './theme'

const navPrev = <ArrowIcon iconColor={color.primary} />
const navNext = <ArrowIcon right iconColor={color.primary} />

export interface DatePickerProps {
  readonly name: string
  readonly onChange?: (obj: OnChangeParameters) => void
  readonly initialDate: moment.Moment
  readonly orientation?: string
  readonly monthFormat?: string
  readonly className?: Classcat.Class
  readonly numberOfMonths?: number
  readonly weekDayFormat?: string
  readonly hideKeyboardShortcutsPanel?: boolean
  readonly isOutsideRange?: (day: moment.Moment) => boolean
  readonly daySize?: number
  readonly locale: string
}

export interface DatePickerState {
  readonly focused: boolean
  readonly date: moment.Moment
}

export default class DatePicker extends Component<DatePickerProps, DatePickerState> {
  static defaultProps: Partial<DatePickerProps> = {
    initialDate: null,
    orientation: HORIZONTAL_ORIENTATION,
    numberOfMonths: 2,
    weekDayFormat: 'ddd',
    monthFormat: 'MMMM YYYY',
    hideKeyboardShortcutsPanel: true,
    onChange() {},
    isOutsideRange: day => !isInclusivelyAfterDay(day, moment()),
    daySize: 50,
    locale: 'en',
  }

  static constants = {
    HORIZONTAL_ORIENTATION,
    VERTICAL_ORIENTATION,
    VERTICAL_SCROLLABLE,
  }

  state: DatePickerState = {
    focused: true,
    date: this.props.initialDate,
  }

  constructor(props: DatePickerProps) {
    super(props)
    moment.locale(props.locale)
  }

  componentWillReceiveProps(newProps: DatePickerProps) {
    if (newProps.locale !== this.props.locale) {
      moment.locale(newProps.locale)
    }
  }

  onDateChange = (date: moment.Moment) => {
    this.setState({ date }, () => {
      if (this.props.onChange) {
        this.props.onChange({
          name: this.props.name,
          value: this.state.date ? this.state.date.format('YYYY-MM-DD') : null,
        })
      }
    })
  }

  renderDayContents = (day: moment.Moment) => (
    // Adds an extra span to day table-cell for styling purpose
    <span className="CalendarDay__button">{day.format('D')}</span>
  )

  renderMonth = (month: moment.Moment) => {
    const locale = this.props.locale || ''
    return (
      // The default react-dates implementation is month.format('MMMM YYYY').
      // We want month.format('MMMM') for the current year.
      month
        .locale(locale)
        .format(this.props.monthFormat)
        .replace(`${moment().year()}`, '')
        .trim()
    )
  }

  render() {
    return (
      <div className={cc(['datePicker', this.props.className])}>
        <DayPickerSingleDateController
          renderMonth={this.renderMonth}
          onDateChange={this.onDateChange}
          numberOfMonths={this.props.numberOfMonths}
          weekDayFormat={this.props.weekDayFormat}
          hideKeyboardShortcutsPanel={this.props.hideKeyboardShortcutsPanel}
          isOutsideRange={this.props.isOutsideRange}
          renderDayContents={this.renderDayContents}
          orientation={this.props.orientation}
          daySize={this.props.daySize}
          focused={this.state.focused}
          date={this.state.date}
          navPrev={navPrev}
          navNext={navNext}
        />
        <style jsx>{style}</style>
        <style jsx>{theme}</style>
      </div>
    )
  }
}
