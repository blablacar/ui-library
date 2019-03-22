# Default PhoneField

```js
import { PhoneField } from '@blablacar/ui-library'
```

## Playground

<!-- STORY -->

## Specifications

This field consists of the input select field and regular input field.

> Phone input

Phone input part should only accept digits and trigger numeric keyboards on mobile devices.

> Country phone code

The country code should be displayed next to a country flag when selection is made.
On the country list the full name plus code should be visible.

## Default usage

```js
<PhoneField name="phoneField" onChange={() => {}} />
```

## Behaviour

On small devices the country selector and the phone input field should get separated into two separate fields.

On large devices the inputs should be displayed as merged. Still the full name should be visible.

Maximum width of the name should be in proportion of 1:2 to the number.
If the name is longer than available field it should get truncated.

## TODO

- [ ] Add a mask to display the current value with flags + phone prefix
