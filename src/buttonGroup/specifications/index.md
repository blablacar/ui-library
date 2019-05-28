# ButtonGroup

```js
import { ButtonGroup } from '@blablacar/ui-library'
```

## Playground

<!-- STORY -->

## Specifications

This component has two layout configurations based on small vs large screen size.

On small devices button group become vertical and consists of Primary and Tertiary buttons. Buttons width are 100%.

On large devices it's horizontal and consists of Primary and Secondary buttons placed inline with reduced spacing between them: 16pt.
Each button occupy 50% of the available space.


```js
<ButtonGroup>
  <Button>Hello</Button>
  <Button status={Button.STATUS.TERTIARY}>there</Button>
</ButtonGroup>
```

## When should I use it?

Use it at the end of a flow. Allows the member to make a final decision.

- ✅ Always at the bottom of the screen
- ✅ Can be sticky
- ⛔️ Labels can't go on 2 lines. If too long we use "…"

## TODO

- [ ] Force button types
