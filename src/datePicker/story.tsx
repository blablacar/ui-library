import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, select, number } from '@storybook/addon-knobs'

import DatePicker from 'datePicker'
import readme from 'datePicker/specifications/datepicker.md'

const stories = storiesOf('DatePicker', module)
stories.addDecorator(withKnobs)

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

stories.add(
  'default',
  () => (
    <DatePicker
      name="datepicker"
      onChange={action('onChange')}
      orientation={select('Orientation', DatePicker.constants, DatePicker.constants.HORIZONTAL)}
      locale={select('Locale', testLocales, 'en-GB')}
      weekdaysShort={weekdaysShort(select('Locale', testLocales, 'en-GB'))}
      weekdaysLong={weekdaysLong(select('Locale', testLocales, 'en-GB'))}
      months={months(select('Locale', testLocales, 'en-GB'))}
      firstDayOfWeek={firstDayOfWeek[select('Locale', testLocales, 'en-GB')]}
      numberOfMonths={number('Number of months', 1)}
      stickyPositionTop={number('Top position of sticky weekdays', 0)}
    />
  ),
  {
    readme: { content: readme },
  },
)

stories.add('example horizontal (2 months)', () => (
  <DatePicker
    name="datepicker"
    onChange={action('onChange')}
    orientation={DatePicker.constants.HORIZONTAL}
    numberOfMonths={2}
  />
))

stories.add('example vertical (6 months)', () => (
  <DatePicker
    name="datepicker"
    onChange={action('onChange')}
    orientation={DatePicker.constants.VERTICAL}
    numberOfMonths={6}
  />
))
