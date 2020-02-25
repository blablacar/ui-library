# TextDisplay2

`TextDisplay2` is text component on top of `Text`.

<!-- STORY -->

## Usage

```js
import TextDisplay2 from 'typography/display2'

<TextDisplay2>The quick brown fox jumps over the lazy dog</TextDisplay2>
```

## Rendering


| **Weight**   | **Size** | **Line**          | **Color** |
| ------------ | -------- | ----------------- |-----------|
| Medium (500) | 82px     | Height 82px (1.0) | title \| white |

`TextDisplay2` is text element `<span />` and **should receive its semantics by its parent** as you can see on the example bellow

```js
<h1>
  <TextDisplay2>The quick brown fox jumps over the lazy dog</TextDisplay2>
</h1>
```

## Props

| **Props**    | **Value**       | **Description**                  |
| ------------ | --------------- | -------------------------------- |
| `isInverted` | `true`\|`false` | When applied to dark backgrounds |
