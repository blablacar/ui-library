import styled from 'styled-components'
import { space, font, color } from '_utils/branding'

import DatePicker from './DatePicker'

const horizontalMonthsGutter = parseInt(space.xl, 10)

const StyledDatePicker = styled(DatePicker)`
  & {
    display: block;
    text-align: center;
    position: relative;
    font-size: ${font.base.size};
    line-height: ${font.base.lineHeight};
    color: ${color.primaryText};
    background-color: ${color.white};
  }

  & .DayPicker-Month {
    display: table;
    margin-bottom: ${space.xl};
    border-spacing: 0;
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
  }
  & .DayPicker-Caption {
    display: table-caption;
    padding: 0 ${space.m} ${space.l};
    font-size: ${font.l.size};
    line-height: ${font.l.lineHeight};
    text-align: left;
  }
  & .DayPicker-Caption:first-letter {
    text-transform: uppercase;
  }
  & .DayPicker-Weekdays {
    display: table-header-group;
  }
  & .DayPicker-WeekdaysRow {
    display: table-row;
  }
  & .DayPicker-Weekday {
    display: table-cell;
    padding: ${space.m} 0;
  }
  & .DayPicker-Weekday abbr[title] {
    border-bottom: 0;
    text-decoration: none;
    cursor: inherit;
  }
  & .DayPicker-Body {
    display: table-row-group;
  }
  & .DayPicker-Week {
    display: table-row;
  }
  & .DayPicker-Day {
    display: table-cell;
    padding: ${space.s} 0;
    cursor: pointer;
    color: ${color.secondaryText};
    outline: none;
  }

  & .DayPicker-Day--today span {
    /**
     * Position context needed for today's date circle decoration.
     */
    position: relative;
  }

  /**
   * Shows a circle around today's date if it's not selected.
   */
  & .DayPicker-Day--today:not(.DayPicker-Day--selected) span:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: ${color.divider} 2px solid;
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }

  & .DayPicker-Day--disabled {
    color: ${color.fadedText};
    cursor: default;
  }
  & .DayPicker-Day--selected span,
  & .DayPicker-Day:focus span {
    background-color: ${color.primary};
    color: ${color.white};
  }
  & .DayPicker-Day span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }

  &.kirk-datepicker-horizontal .DayPicker-Months {
    display: flex;
  }
  &.kirk-datepicker-horizontal .DayPicker-Month {
    flex-grow: 1;
  }
  &.kirk-datepicker-horizontal.kirk-datepicker-months-grid-2 .DayPicker-Month {
    width: calc(50% - ${horizontalMonthsGutter / 2}px);
  }
  &.kirk-datepicker-horizontal.kirk-datepicker-months-grid-3 .DayPicker-Month {
    width: calc(33.33% - ${horizontalMonthsGutter / 2}px);
  }
  &.kirk-datepicker-horizontal .DayPicker-Month + .DayPicker-Month {
    margin-left: ${horizontalMonthsGutter}px;
  }
  &.kirk-datepicker-horizontal .DayPicker-Caption {
    text-align: center;
  }
  &.kirk-datepicker-horizontal .kirk-datepicker-previous-month {
    position: absolute;
    top: -12px;
    left: 0;
  }
  &.kirk-datepicker-horizontal .kirk-datepicker-next-month {
    position: absolute;
    top: -12px;
    right: 0;
  }

  &.kirk-datepicker-vertical .DayPicker-Weekdays {
    display: none;
  }
  &.kirk-datepicker-vertical .DayPicker-Caption {
    padding-top: ${space.l};
  }
  &.kirk-datepicker-vertical .kirk-datepicker-sticky-weekdays {
    display: table;
    width: 100%;
    table-layout: fixed;
    position: sticky;
    top: 0;
    background-color: ${color.white};
  }
  &.kirk-datepicker-vertical .kirk-datepicker-sticky-weekdaysrow {
    display: table-row;
  }
  &.kirk-datepicker-vertical .kirk-datepicker-sticky-weekday {
    display: table-cell;
    padding: ${space.m} 0;
  }
`

export { DatePickerProps, DatePickerOrientation } from './DatePicker'
export default StyledDatePicker
