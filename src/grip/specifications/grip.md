# Grip

Use it to indicate that a part of the screen is reactive to slide touch events.

<!-- STORY -->

## Usage

`TextComponents` are exported individually.

```js
import Grip from '@blablacar/ui-library/build/grip'
;<Grip
  onSlideUp={() => {
    /* ... */
  }}
  onSlideDown={() => {
    /* ... */
  }}
>
  <TheVoice>What is your route?</TheVoice>
</Grip>
```

## Props

| **Props**     | **Value**  | **Description**                     |
| ------------- | ---------- | ----------------------------------- |
| `onSlideUp`   | `function` | Callback for slide up touch event   |
| `onSlideDown` | `function` | Callback for slide down touch event |
| `disabled`    | `boolean`  | Disables touch events               |
