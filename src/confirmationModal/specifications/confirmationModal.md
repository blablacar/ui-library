# `ConfirmationModal`

```js
import { confirmationModal, ConfirmationModalStatus } from '@blablacar/ui-library'
```

## Playground

<!-- STORY -->

## Specifications

These screens appear after user has made an action or a choice. They appear with an animation that put it on top of the flow.

There are two types:

- `Reminder` (no action required)
- `Warning` (confirming an action)

Close button just closes the screen.
Confirmation button closes the screen and resumes the original action that prompted the warning.
In effect - transition to the next page happens from the original screen that prompted the warning.

### Acknowledge

These screens appear after user has made an action or a choice. They appear with an animation that put it on top of the flow.
These screens can’t be a final page decision.
Confirmation button closes the screen and resumes the original action that prompted the acknowledgement.

### Long texts

If text is too long there’s no limit on the number of lines. The title can go on 2, 3 or more lines, as for the subtitles.

If it goes over the height of the screen, then it’s scrollable while the CTAs are still sticky.

### Layout

This modal is always being displayed in fullscren. Use `size` prop to change the layout depending on the screen size.
