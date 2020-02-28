import React, { PureComponent } from 'react'
import cc from 'classcat'
import DayPicker, { DayModifiers, NavbarElementProps, CaptionElementProps } from 'react-day-picker'

import prefix from '_utils'
import { color } from '_utils/branding'
import ArrowIcon from 'icon/arrowIcon'
import Button, { ButtonStatus } from 'button'

const [BASE_CLASSNAME] = prefix({ datepicker: true })

const defaultWeekdaysLong = [0, 1, 2, 3, 4, 5, 6].map(weekday =>
  DayPicker.LocaleUtils.formatWeekdayLong(weekday),
)
const defaultWeekdaysShort = [0, 1, 2, 3, 4, 5, 6].map(weekday =>
  DayPicker.LocaleUtils.formatWeekdayShort(weekday),
)
const defaultMonths = DayPicker.LocaleUtils.getMonths()

export enum DatePickerOrientation {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

export interface DatePickerProps {
  readonly name: string
  readonly locale?: string
  readonly weekdaysShort?: string[]
  readonly weekdaysLong?: string[]
  readonly months?: string[]
  readonly onChange?: (obj: OnChangeParameters) => void
  readonly initialDate?: Date
  readonly initialMonth?: Date
  readonly className?: Classcat.Class
  readonly numberOfMonths?: number
  readonly orientation?: DatePickerOrientation
  readonly isOutsideRange?: (day: Date) => boolean
  readonly fromMonth?: Date
  readonly firstDayOfWeek?: number
  readonly stickyPositionTop?: number
}

export interface DatePickerState {
  readonly date: Date
}

export class DatePicker extends PureComponent<DatePickerProps, DatePickerState> {
  static defaultProps: Partial<DatePickerProps> = {
    locale: 'en',
    weekdaysShort: defaultWeekdaysShort,
    weekdaysLong: defaultWeekdaysLong,
    months: defaultMonths,
    numberOfMonths: 2,
    initialDate: null,
    initialMonth: new Date(),
    isOutsideRange: day => DayPicker.DateUtils.isDayBefore(day, new Date()),
    orientation: DatePickerOrientation.HORIZONTAL,
    fromMonth: new Date(),
    firstDayOfWeek: 0,
    stickyPositionTop: 0,
  }

  state = {
    date: this.props.initialDate,
  }

  dayPickerContainer = React.createRef<HTMLDivElement>()

  formatMonthTitle = (date: Date): string => {
    const currentYear = `${new Date().getFullYear()}`
    return `${this.props.months[date.getMonth()]} ${date.getFullYear()}`.replace(currentYear, '')
  }

  onDayClick = (date: Date, modifiers: DayModifiers) => {
    if (!modifiers.disabled) {
      this.setState({ date })

      if (this.props.onChange) {
        const yearString = `${date.getFullYear()}`
        const monthString = `${date.getMonth() + 1}`.padStart(2, '0')
        const dayString = `${date.getDate()}`.padStart(2, '0')
        this.props.onChange({
          name: this.props.name,
          value: `${yearString}-${monthString}-${dayString}`,
        })
      }
    }
  }

  renderNavbar = (props: NavbarElementProps) => {
    if (this.props.orientation === DatePickerOrientation.VERTICAL) {
      // re-order weekdays starting from given firstDayOfWeek
      const orderedWeekdays = [
        ...this.props.weekdaysShort.slice(this.props.firstDayOfWeek),
        ...this.props.weekdaysShort.slice(0, this.props.firstDayOfWeek),
      ]
      const style = { top: `${this.props.stickyPositionTop}px` }
      return (
        <div
          className={cc(prefix({ 'sticky-weekdays': true }, BASE_CLASSNAME))}
          style={style}
          aria-hidden="true"
        >
          <div className={cc(prefix({ 'sticky-weekdaysrow': true }, BASE_CLASSNAME))}>
            {orderedWeekdays.map(weekday => (
              <div className={cc(prefix({ 'sticky-weekday': true }, BASE_CLASSNAME))} key={weekday}>
                {weekday}
              </div>
            ))}
          </div>
        </div>
      )
    }

    return (
      <div className={props.className}>
        {props.showPreviousButton && (
          <Button
            status={ButtonStatus.TERTIARY}
            className={prefix({ 'previous-month': true }, BASE_CLASSNAME)}
            onClick={() => props.onPreviousClick()}
            isBubble
          >
            <ArrowIcon iconColor={color.primary} />
          </Button>
        )}
        {props.showNextButton && (
          <Button
            status={ButtonStatus.TERTIARY}
            className={prefix({ 'next-month': true }, BASE_CLASSNAME)}
            onClick={() => props.onNextClick()}
            isBubble
          >
            <ArrowIcon right iconColor={color.primary} />
          </Button>
        )}
      </div>
    )
  }

  renderCaption = (props: CaptionElementProps) => (
    <div className={cc([prefix({ 'month-caption': true }, BASE_CLASSNAME), 'DayPicker-Caption'])}>
      {props.localeUtils.formatMonthTitle(props.date)}
    </div>
  )

  renderDay = (day: Date) => <span>{day.getDate()}</span>

  scrollToSelectedMonth = () => {
    const { initialDate, initialMonth } = this.props

    if (initialDate === null) return

    // Get the number of months between initialMonth (first month) and initialDate (selected date)
    // This gives us the index to select the right month in '.DayPicker-Month' array
    const month =
      (initialDate.getFullYear() - initialMonth.getFullYear()) * 12 +
      initialDate.getMonth() -
      initialMonth.getMonth()

    const selectedMonth = this.dayPickerContainer.current.querySelectorAll('.DayPicker-Month')[
      month
    ] as HTMLElement

    if (typeof selectedMonth === 'undefined') return

    const top = selectedMonth.offsetTop + this.props.stickyPositionTop
    if (top > window.innerHeight + window.pageYOffset) {
      window.scrollTo(0, top)
    }
  }

  componentDidMount() {
    this.scrollToSelectedMonth()
  }

  componentDidUpdate() {
    this.scrollToSelectedMonth()
  }

  render() {
    const {
      className,
      numberOfMonths,
      isOutsideRange,
      orientation,
      fromMonth,
      weekdaysShort,
      weekdaysLong,
      months,
      firstDayOfWeek,
      initialMonth,
    } = this.props
    const { date } = this.state
    const layoutClassName = `months-grid-${numberOfMonths}`

    return (
      <div
        ref={this.dayPickerContainer}
        className={cc([
          BASE_CLASSNAME,
          className,
          prefix({ [orientation]: true }, BASE_CLASSNAME),
          prefix({ [layoutClassName]: true }, BASE_CLASSNAME),
        ])}
      >
        <DayPicker
          numberOfMonths={numberOfMonths}
          onDayClick={this.onDayClick}
          selectedDays={date}
          disabledDays={isOutsideRange}
          fromMonth={fromMonth}
          pagedNavigation
          navbarElement={this.renderNavbar}
          captionElement={this.renderCaption}
          renderDay={this.renderDay}
          weekdaysShort={weekdaysShort}
          weekdaysLong={weekdaysLong}
          months={months}
          firstDayOfWeek={firstDayOfWeek}
          localeUtils={{ ...DayPicker.LocaleUtils, formatMonthTitle: this.formatMonthTitle }}
          initialMonth={initialMonth}
        />
      </div>
    )
  }
}

export default DatePicker
