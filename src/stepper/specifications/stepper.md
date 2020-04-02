# Stepper

```js
import { Stepper, StepperDisplay } from '@blablacar/ui-library'
```

## How to use

```html
<Stepper name="price" min={1} max={100} step={2} value={5} increaseLabel="Increment"
decreaseLabel="Decrement" format={value => `${value} €`} onChange={onChange}
display={StepperDisplay.SMALL} title="Edit the price" />
```

## Playground

<!-- STORY -->

## Specifications

> Normal state

This stepper is used in one screen one action pages.

> Behaviour

When reaching the highest value the “increase” button is disabled. Same thing when reaching the lowest value, the “decrease” button is disabled.

We can’t display more than 1 stepper on the same line.

When user is coming back from the next step, we remember the value.

> Long texts

It can’t go on more than 1 line. If data is too long we reduce the font size.
