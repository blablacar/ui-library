# Tertiary Button

```js
import { Button } from '@blablacar/ui-library'
```

## Playground

<!-- STORY -->

## Specifications

Least prominent button with no background and reduced padding.

When user taps on it there’s a pressed state.
After tapping if request is already loaded we either go to the next page or close the modal or if it’s a final decision we display the checked state then close the page.

If request is not loaded we display the loading state of these buttons.
When loaded, we either go to the next page or close the modal or if it’s a final decision we display the checked state.

```js
<Button status={Button.STATUS.TERTIARY}>content</Button>
```

## When should I use it?

- ✅ Always centred in the page
- ℹ️ No minimum size.

## Behaviour

These buttons are used in button group for reduced component size on mobile devices.

## Long texts

If text is too long we can’t go on 2 lines. If too long we display “…” at the end.
