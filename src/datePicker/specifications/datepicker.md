# Date Picker

```js
import { DatePicker } from '@blablacar/ui-library'
```

## Playground

<!-- STORY -->

## Specifications

> Normal state

Depending on the country the days at the top should adapt to it (e.g. in some countries weeks start with Sunday).
We can’t see previous months.

> Scrolling state

When scrolling, days stick to the top bar (vertical mode only).

> Past days

We display past days (days before the actual one) in light grey (#EDEDED). These dates can’t be tapped. If user taps on it nothing happens.

> Next year

When user scrolls from one year to another we display the year next to the month for every month of the next year.

## Localization

The DatePicker component comes with a default english configuration, but if you need to use it with other languages, you can override all names through props: `locale`, `months`, `weekdaysShort`, `weekdaysLong` and `firstDayOfWeek`.

> How to get localized months and days with Intl API

You can easily retrieve months and weekdays for any existing language with the web Intl API (which is supported by all modern browsers, and can also be polyfilled for larger support).

```ts
const weekdaysShort = (locale: string): string[] => {
  const options = { weekday: 'short' }
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
```

Only the first day of the week would need some kind of config or different source. You can also use any other library that would provide you these informations if you use one in your project.
