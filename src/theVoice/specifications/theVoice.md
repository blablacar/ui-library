## The Voice

```js
import { TheVoice } from '@blablacar/ui-library'
```

```html
<TheVoice>
  This is the Voice!
</TheVoice>
```

## Specifications

> Behaviour

Use it to guide the member on what to do in the screen.
This component is the core of our **conversational approach**.

The voice is not clickable.
It’s not sticky but when scrolling it slides under the topbar.

**SIZING AND POSITIONING**

Tall viewport, above 800px: Text is centered, font size is 32px.
When screen width is less than 800px:

- the font size moves down to 22px.
- the text becomes left-aligned instead of centered

**COLORS**

It can switch colors when applied to darker backgrounds.

> Long texts

There’s no limitation on the number of lines.
