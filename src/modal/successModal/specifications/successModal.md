# Success Modal

```js
import { successModal } from '@blablacar/ui-library'
```

## Playground

<!-- STORY -->

## Specifications

### Normal state

There’s always an illustration at the top of the screen (on the left on `large` screen).
This illustration could be animated.
There’s a centred white the voice and always a generic button.

### Navigate

There’s no top bar in a success screen so user can’t go back. If the user is using the browser back we redirect him to the right page depending on the case.

### Animation

No animation specs yet but for now let’s make it appear with a fade in and disappear with a fade out.

### Layout

This modal is always being displayed in fullscren. Use `size` prop to change the layout depending on the screen size.
