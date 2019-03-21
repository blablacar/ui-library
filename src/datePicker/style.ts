import css from 'styled-jsx/css'

import { space, font, color } from '_utils/branding'

const horizontalMonthsGutter = parseInt(space.xl, 10)

export default css`
  .kirk-datepicker {
    display: block;
    text-align: center;
    position: relative;
    font-size: ${font.base.size};
    line-height: ${font.base.lineHeight};
    color: ${color.primaryText};
    background-color: ${color.white};
  }

  .kirk-datepicker :global(.DayPicker-Month) {
    display: table;
    margin-bottom: ${space.xl};
    border-spacing: 0;
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
  }
  .kirk-datepicker :global(.DayPicker-Caption) {
    display: table-caption;
    padding: 0 ${space.m} ${space.l};
    font-size: ${font.l.size};
    line-height: ${font.l.lineHeight};
    text-align: left;
  }
  .kirk-datepicker :global(.DayPicker-Caption:first-letter) {
    text-transform: uppercase;
  }
  .kirk-datepicker :global(.DayPicker-Weekdays) {
    display: table-header-group;
  }
  .kirk-datepicker :global(.DayPicker-WeekdaysRow) {
    display: table-row;
  }
  .kirk-datepicker :global(.DayPicker-Weekday) {
    display: table-cell;
    padding: ${space.m} 0;
  }
  .kirk-datepicker :global(.DayPicker-Weekday abbr[title]) {
    border-bottom: 0;
    text-decoration: none;
    cursor: inherit;
  }
  .kirk-datepicker :global(.DayPicker-Body) {
    display: table-row-group;
  }
  .kirk-datepicker :global(.DayPicker-Week) {
    display: table-row;
  }
  .kirk-datepicker :global(.DayPicker-Day) {
    display: table-cell;
    padding: ${space.s} 0;
    cursor: pointer;
    color: ${color.secondaryText};
  }
  .kirk-datepicker :global(.DayPicker-Day--disabled) {
    color: ${color.fadedText};
    cursor: default;
  }
  .kirk-datepicker :global(.DayPicker-Day--selected span) {
    background-color: ${color.primary};
    color: ${color.white};
  }
  .kirk-datepicker :global(.DayPicker-Day span) {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }

  .kirk-datepicker-horizontal :global(.DayPicker-Months) {
    display: flex;
  }
  .kirk-datepicker-horizontal :global(.DayPicker-Month) {
    flex-grow: 1;
  }
  .kirk-datepicker-horizontal.kirk-datepicker-months-grid-2 :global(.DayPicker-Month) {
    width: calc(50% - ${horizontalMonthsGutter / 2}px);
  }
  .kirk-datepicker-horizontal.kirk-datepicker-months-grid-3 :global(.DayPicker-Month) {
    width: calc(33.33% - ${horizontalMonthsGutter / 2}px);
  }
  .kirk-datepicker-horizontal :global(.DayPicker-Month + .DayPicker-Month) {
    margin-left: ${horizontalMonthsGutter}px;
  }
  .kirk-datepicker-horizontal :global(.DayPicker-Caption) {
    text-align: center;
  }
  .kirk-datepicker-horizontal :global(.kirk-datepicker-previous-month) {
    position: absolute;
    top: -12px;
    left: 0;
  }
  .kirk-datepicker-horizontal :global(.kirk-datepicker-next-month) {
    position: absolute;
    top: -12px;
    right: 0;
  }

  .kirk-datepicker-vertical :global(.DayPicker-Weekdays) {
    display: none;
  }
  .kirk-datepicker-vertical :global(.DayPicker-Caption) {
    padding-top: ${space.l};
  }
  .kirk-datepicker-vertical :global(.kirk-datepicker-sticky-weekdays) {
    display: table;
    width: 100%;
    table-layout: fixed;
    position: sticky;
    top: 0;
    background-color: ${color.white};
  }
  .kirk-datepicker-vertical :global(.kirk-datepicker-sticky-weekdaysrow) {
    display: table-row;
  }
  .kirk-datepicker-vertical :global(.kirk-datepicker-sticky-weekday) {
    display: table-cell;
    padding: ${space.m} 0;
  }
`
