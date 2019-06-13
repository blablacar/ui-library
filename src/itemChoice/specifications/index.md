# ItemChoice

```js
import { ItemChoice } from '@blablacar/ui-library'
```

## Playground

<!-- STORY -->

## Specifications

> Normal state

These items are used when we want the user to make a decision between at least two choices and we want to recommend one option more than the others.

> Behaviour

There is no preselected state (visually). So if the user is coming back from a next step, nothing is selected.

User can't select multiple options.

> Long texts

There is no limitation on the number of lines. When the text is long, icons and chevron are centred in height.

> Loading state

In the case of these Items, the loader is displayed on the right, hiding the chevron.

When it's not the end of a flow, the loading state appears after one second (to answer user's impatience). Then it goes directly to the next step.
When it's an end of flow, we show the loading state and then animate it into a check.

We let the checked state for 0.5s and then we proceed with the redirection.
