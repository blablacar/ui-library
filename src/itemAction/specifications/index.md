# ItemAction

```js
import { ItemAction } from '@blablacar/ui-library'
```

## Playground

<!-- STORY -->

## Specifications

> Normal state

These items always activate subactions and modals (or sometimes native elements like a bottom sheet). We use them when the action is not part of the main flow it appears in (Contact the DRVR is a subaction of the booking flow, there’s a beginning and an end to it to then go back to the main flow)

“In product” and “out of product” subactions are represented with items actions.
If an “in product” subaction launches a modal that contains “out of product” actions we use items navigate (e.g. share on Facebook).

They look like items choice but for designers needs the objective is different.

> Behaviour

We could display several items action on the same line.

> Long texts

There’s no limitation on the number of lines for the main info or the title.
When long text icons and chevrons are centred in height.


## When should I use it?

Use it when the member needs to take an action before returning to the same page.
Never used for final decisions.

- ✅ Clickable. Launches a modal or native element such as a bottom sheet when tapped.
- ℹ️ Unlimited number of lines of text.
- 🖊 Topline: Max. 20 characters in EN, max. 30 in other 	languages (including spaces)
- 🖊 Subtitle: Max. 60 characters in EN, max. 90 in other 	languages (including spaces)
