# Primary Button

```js
import { Button } from '@blablacar/ui-library'
```

## Playground

<!-- STORY -->

## Specifications

> With text

These buttons are always centred in the page, unless it’s displayed next to a secondary button (e.g. Accept / Refuse).

When user taps on it there’s a pressed state.
After tapping if request is already loaded we either go to the next page or close the modal or if it’s a final decision we display the checked state.
If request is not loaded we display the loading state of these buttons. When loaded, we either go to the next page or close the modal or if it’s a final decision we display the checked state.

```js
<Button status={Button.STATUS.PRIMARY}>content</Button>
```

> With an icon

Continue buttons
These buttons are used in the middle of the flow and never at the end of it.

When user taps on it there’s a pressed state.
After tapping if request is already loaded we go to the next page.
If request is not loaded we display the loading state of these buttons. When loaded, we go to the next page. There’s no validated state for this component as it’s never a final decision button.

```js
<Button status={Button.STATUS.PRIMARY} isBubble>
  <ArrowIcon right iconColor={color.primary} />
</Button>
```

## When should I use it?

> With text

Use it at the end of a flow. Allows the member to make a final decision.

- ✅ Use when making a final decision
- ✅ Always centred in the page
- ⛔️ Can’t go on 2 lines. If too long we use “…”
- ⛔️ Not always sticky
- ℹ️ No minimum size.
- 🖊 Max. 20 characters in EN, max. 30 in other languages (including spaces)

> With an icon

Use it in the middle of a flow. Allows the member to continue to the next screen.

- ✅ Always at bottom right of screen
- ✅ Always displayed when keyboard is also displayed
- ⛔️ Not always sticky.
- 🖊 No text in this component.

## Behaviour

> With Text

These buttons can either be sticky or not depending on the need.

If sticky they appear above the keyboard and above other components in the page.

When there’s an error that blocks the user to move forward, we hide these buttons.

> With an icon

These buttons are always displayed on the bottom right of the screen. They can either be sticky or not depending on the need.

If sticky they appear above the keyboard and above other components in the page.

When there’s an error that blocks the user to move forward, we hide these buttons.

## Long texts

If text is too long we can’t go on 2 lines. If too long we display “…” at the end.

## TODO

- [ ] Animations
