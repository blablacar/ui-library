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
