import React from 'react'
import { action } from '@storybook/addon-actions'
import { number, select } from '@storybook/addon-knobs'

import { DatePicker, DatePickerOrientation } from '../datePicker'

export default {
  title: 'Forms|DatePicker',
  component: DatePicker,
}

const weekdaysShort = (locale: string): string[] => {
  const options = { weekday: 'short' }
  return [0, 1, 2, 3, 4, 5, 6].map(i =>
    new Intl.DateTimeFormat(locale, options).format(new Date(Date.UTC(0, 0, i))),
  )
}

const weekdaysLong = (locale: string): string[] => {
  const options = { weekday: 'long' }
  return [0, 1, 2, 3, 4, 5, 6].map(i =>
    new Intl.DateTimeFormat(locale, options).format(new Date(Date.UTC(0, 0, i))),
  )
}

const months = (locale: string): string[] => {
  const options = { month: 'long' }
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i =>
    new Intl.DateTimeFormat(locale, options).format(new Date(Date.UTC(0, i, 1))),
  )
}

type FirstDayOfWeekMap = {
  [x: string]: number
}

const firstDayOfWeek: FirstDayOfWeekMap = {
  'en-GB': 0,
  'fr-FR': 1,
  'ru-RU': 0,
}

const testLocales = ['en-GB', 'fr-FR', 'ru-RU']

export const Basic = () => (
  <DatePicker
    initialDate={new Date()}
    name="datepicker"
    onChange={action('onChange')}
    orientation={select('Orientation', DatePickerOrientation, DatePickerOrientation.HORIZONTAL)}
    locale={select('Locale', testLocales, 'en-GB')}
    weekdaysShort={weekdaysShort(select('Locale', testLocales, 'en-GB'))}
    weekdaysLong={weekdaysLong(select('Locale', testLocales, 'en-GB'))}
    months={months(select('Locale', testLocales, 'en-GB'))}
    firstDayOfWeek={firstDayOfWeek[select('Locale', testLocales, 'en-GB')]}
    numberOfMonths={number('Number of months', 1)}
    stickyPositionTop={number('Top position of sticky weekdays', 0)}
  />
)

export const Horizontal = () => (
  <DatePicker
    initialDate={new Date()}
    name="datepicker"
    onChange={action('onChange')}
    orientation={DatePickerOrientation.HORIZONTAL}
    numberOfMonths={2}
  />
)

export const Vertical6Months = () => (
  <DatePicker
    initialDate={new Date()}
    name="datepicker"
    onChange={action('onChange')}
    orientation={DatePickerOrientation.VERTICAL}
    numberOfMonths={6}
  />
)

export const VerticalYear = () => {
  const initialeDate = new Date()
  initialeDate.setMonth(initialeDate.getMonth() + 6)

  return (
    <DatePicker
      initialDate={initialeDate}
      name="datepicker"
      onChange={action('onChange')}
      orientation={DatePickerOrientation.VERTICAL}
      numberOfMonths={12}
    />
  )
}
