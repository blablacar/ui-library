## The Voice

<!-- STORY -->

## Usage

```js
import { TheVoice } from '@blablacar/ui-library'
```

```html
<TheVoice isInverted="{true||false}">
  This is the Voice!
</TheVoice>
```

## Props

| **Props**    | **Value**       | **Description**                                 |
| ------------ | --------------- | ----------------------------------------------- |
| `isInverted` | `true`\|`false` | When applied to dark backgrounds _(cf. COLORS)_ |

## Specifications

### BEHAVIOUR

This component is the core of our **conversational approach**.
Use it to guide the member on what to do in the screen.

`TheVoice` is not clickable.

It’s not sticky but when scrolling it slides under the topbar.

### SIZING AND POSITIONING

#### Viewport variation

_Mobile (below `799px`)_

- Text aligned left
- Font-size same as `Title`

_Desktop (above `800px`)_

- Text is centered
- Font-size up to `40px`

#### Text rules

- There’s no limitation on the _number of lines_

#### COLORS

It can switch colors (`white` or `midnightGreen`) when applied to darker backgrounds.
