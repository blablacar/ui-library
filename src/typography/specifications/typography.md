# Typography

_Text Components_ are text based components.

<!-- STORY -->

## Usage

`TextComponents` are exported individually.

```js
import TextBody from './typography/body'
import TextBodyStrong from './typography/bodyStrong'
import TextCaption from './typography/caption'
import TextTitle from './typography/title'
import TextTitleStrong from './typography/titleStrong'
import TextSubHeader from './typography/subHeader'
import TextSubHeaderStrong from './typography/subHeaderStrong'
import TextDisplay2 from './typography/display2'
import TextDisplay1 from './typography/display1'


<TextBody>The quick brown fox jumps over the lazy dog</TextBody>
<TextBodyStrong>The quick brown fox jumps over the lazy dog</TextBodyStrong>
<TextCaption>The quick brown fox jumps over the lazy dog</TextCaption>
<TextTitle>The quick brown fox jumps over the lazy dog</TextTitle>
<TextTitleStrong>The quick brown fox jumps over the lazy dog</TextTitleStrong>
<TextSubHeader>The quick brown fox jumps over the lazy dog</TextSubHeader>
<TextSubHeaderStrong>The quick brown fox jumps over the lazy dog</TextSubHeaderStrong>
<TextDisplay2>The quick brown fox jumps over the lazy dog</TextDisplay2>
<TextDisplay1>The quick brown fox jumps over the lazy dog</TextDisplay1>
```

They are rendered wrapped on a `<span />` element and **should receive its semantics by its parent** as you can see on the example bellow

```js
// Declaration
<h1>
  <TextComponent>The quick brown fox jumps over the lazy dog</TextComponent>
</h1>

// Render
<h1>
  <span>The quick brown fox jumps over the lazy dog</span>
</h1>
```

## Props

| **Props**    | **Value**       | **Description**                  |
| ------------ | --------------- | -------------------------------- |
| `isInverted` | `true`\|`false` | When applied to dark backgrounds |

## Implementation details

By default, a **TextComponent** accepts `\n` to create line breaks on the text.
